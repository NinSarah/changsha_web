<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>

    <div style="margin-left: 500px;">
      <el-button @click="cancel">取消</el-button>
      <el-button ref="saveBtn" type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import { xmlStr } from './mock/xmlStr'
import customModule from './customPalette';

export default {
  name: 'processConfig',
  components: {},
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null,
      xmlUrl: '',
      // defaultXmlStr: xmlStr,
      defaultXmlStr: '<?xml version="1.0" encoding="UTF-8"?>\n'+
'<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">\n'+
  '<process id="Process_1" isExecutable="false">\n'+
    '<startEvent id="StartEvent_1y45yut" name="开始">\n'+
      '<outgoing>SequenceFlow_0h21x7r</outgoing>\n'+
    '</startEvent>\n'+
    '<task id="Task_1hcentk" name="质检员取件制作试块">\n'+
      '<incoming>SequenceFlow_0h21x7r</incoming>\n'+
      '<outgoing>Flow_1nfgueq</outgoing>\n'+
    '</task>\n'+
    '<sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />\n'+
    '<exclusiveGateway id="Gateway_1atgzpg">\n'+
      '<incoming>Flow_1nfgueq</incoming>\n'+
      '<outgoing>Flow_0yirg6q</outgoing>\n'+
   ' </exclusiveGateway>\n'+
    '<sequenceFlow id="Flow_1nfgueq" sourceRef="Task_1hcentk" targetRef="Gateway_1atgzpg" />\n'+
    '<task id="Activity_1x6yc90" name="混凝土待压力测试">\n'+
      '<incoming>Flow_0yirg6q</incoming>\n'+
      '<incoming>Flow_1vq29if</incoming>\n'+
      '<outgoing>Flow_13qy96a</outgoing>\n'+
    '</task>\n'+
    '<sequenceFlow id="Flow_0yirg6q" name="是否强度检测" sourceRef="Gateway_1atgzpg" targetRef="Activity_1x6yc90" />\n'+
    '<task id="Activity_08a8rri" name="物检员检测">\n'+
      '<incoming>Flow_13qy96a</incoming>\n'+
      '<incoming>Flow_1iv6uqy</incoming>\n'+
      '<outgoing>Flow_1059ii8</outgoing>\n'+
    '</task>\n'+
    '<sequenceFlow id="Flow_13qy96a" sourceRef="Activity_1x6yc90" targetRef="Activity_08a8rri" />\n'+
    '<exclusiveGateway id="Gateway_0ssh8mz">\n'+
      '<incoming>Flow_1059ii8</incoming>\n'+
      '<outgoing>Flow_00gin2t</outgoing>\n'+
      '<outgoing>Flow_036ywxp</outgoing>\n'+
      '<outgoing>Flow_1vq29if</outgoing>\n'+
    '</exclusiveGateway>\n'+
    '<sequenceFlow id="Flow_1059ii8" sourceRef="Activity_08a8rri" targetRef="Gateway_0ssh8mz" />\n'+
    '<task id="Activity_0k4p49d" name="实验室科长审核">\n'+
      '<incoming>Flow_00gin2t</incoming>\n'+
      '<incoming>Flow_036ywxp</incoming>\n'+
      '<outgoing>Flow_1wnsg1j</outgoing>\n'+
    '</task>\n'+
    '<sequenceFlow id="Flow_00gin2t" name="是否强度检测" sourceRef="Gateway_0ssh8mz" targetRef="Activity_0k4p49d" />\n'+
    '<exclusiveGateway id="Gateway_115ds54">\n'+
      '<incoming>Flow_1wnsg1j</incoming>\n'+
      '<outgoing>Flow_14s3x0d</outgoing>\n'+
      '<outgoing>Flow_1iv6uqy</outgoing>\n'+
    '</exclusiveGateway>\n'+
    '<sequenceFlow id="Flow_1wnsg1j" sourceRef="Activity_0k4p49d" targetRef="Gateway_115ds54" />\n'+
    '<endEvent id="Event_160e3e0" name="结束">\n'+
      '<incoming>Flow_14s3x0d</incoming>\n'+
    '</endEvent>\n'+
    '<sequenceFlow id="Flow_14s3x0d" sourceRef="Gateway_115ds54" targetRef="Event_160e3e0" />\n'+
    '<sequenceFlow id="Flow_036ywxp" name="退回" sourceRef="Gateway_0ssh8mz" targetRef="Activity_0k4p49d" />\n'+
    '<sequenceFlow id="Flow_1vq29if" name="是" sourceRef="Gateway_0ssh8mz" targetRef="Activity_1x6yc90" />\n'+
    '<sequenceFlow id="Flow_1iv6uqy" name="审批不通过" sourceRef="Gateway_115ds54" targetRef="Activity_08a8rri" />\n'+
  '</process>\n'+
  '<bpmndi:BPMNDiagram id="BpmnDiagram_1">\n'+
    '<bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">\n'+
      '<bpmndi:BPMNEdge id="Flow_1iv6uqy_di" bpmnElement="Flow_1iv6uqy">\n'+
          '<omgdi:waypoint x="990" y="145" />\n'+
          '<omgdi:waypoint x="990" y="210" />\n'+
          '<omgdi:waypoint x="660" y="210" />\n'+
          '<omgdi:waypoint x="660" y="160" />\n'+
          '<bpmndi:BPMNLabel>\n'+
            '<omgdc:Bounds x="872" y="192" width="56" height="14" />\n'+
          '</bpmndi:BPMNLabel>\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_1vq29if_di" bpmnElement="Flow_1vq29if">\n'+
          '<omgdi:waypoint x="750" y="95" />\n'+
          '<omgdi:waypoint x="750" y="50" />\n'+
          '<omgdi:waypoint x="490" y="50" />\n'+
          '<omgdi:waypoint x="490" y="80" />\n'+
          '<bpmndi:BPMNLabel>\n'+
            '<omgdc:Bounds x="734" y="73" width="12" height="14" />\n'+
          '</bpmndi:BPMNLabel>\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_036ywxp_di" bpmnElement="Flow_036ywxp">\n'+
          '<omgdi:waypoint x="750" y="145" />\n'+
          '<omgdi:waypoint x="750" y="180" />\n'+
          '<omgdi:waypoint x="890" y="180" />\n'+
          '<omgdi:waypoint x="890" y="160" />\n'+
          '<bpmndi:BPMNLabel>\n'+
            '<omgdc:Bounds x="729" y="162" width="22" height="14" />\n'+
          '</bpmndi:BPMNLabel>\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_14s3x0d_di" bpmnElement="Flow_14s3x0d">\n'+
          '<omgdi:waypoint x="1015" y="120" />\n'+
          '<omgdi:waypoint x="1062" y="120" />\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_1wnsg1j_di" bpmnElement="Flow_1wnsg1j">\n'+
          '<omgdi:waypoint x="940" y="120" />\n'+
          '<omgdi:waypoint x="965" y="120" />\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_00gin2t_di" bpmnElement="Flow_00gin2t">\n'+
          '<omgdi:waypoint x="775" y="120" />\n'+
          '<omgdi:waypoint x="840" y="120" />\n'+
          '<bpmndi:BPMNLabel>\n'+
            '<omgdc:Bounds x="775" y="123" width="66" height="14" />\n'+
          '</bpmndi:BPMNLabel>\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_1059ii8_di" bpmnElement="Flow_1059ii8">\n'+
          '<omgdi:waypoint x="680" y="120" />\n'+
          '<omgdi:waypoint x="725" y="120" />\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_13qy96a_di" bpmnElement="Flow_13qy96a">\n'+
          '<omgdi:waypoint x="540" y="120" />\n'+
          '<omgdi:waypoint x="580" y="120" />\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_0yirg6q_di" bpmnElement="Flow_0yirg6q">\n'+
          '<omgdi:waypoint x="365" y="120" />\n'+
          '<omgdi:waypoint x="440" y="120" />\n'+
          '<bpmndi:BPMNLabel>\n'+
            '<omgdc:Bounds x="367" y="102" width="66" height="14" />\n'+
          '</bpmndi:BPMNLabel>\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="Flow_1nfgueq_di" bpmnElement="Flow_1nfgueq">\n'+
          '<omgdi:waypoint x="290" y="120" />\n'+
          '<omgdi:waypoint x="315" y="120" />\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">\n'+
          '<omgdi:waypoint x="168" y="120" />\n'+
          '<omgdi:waypoint x="190" y="120" />\n'+
        '</bpmndi:BPMNEdge>\n'+
        '<bpmndi:BPMNShape id="Activity_1x6yc90_di" bpmnElement="Activity_1x6yc90">\n'+
          '<omgdc:Bounds x="440" y="80" width="100" height="80" />\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="Activity_08a8rri_di" bpmnElement="Activity_08a8rri">\n'+
          '<omgdc:Bounds x="580" y="80" width="100" height="80" />\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="Gateway_0ssh8mz_di" bpmnElement="Gateway_0ssh8mz" isMarkerVisible="true">\n'+
          '<omgdc:Bounds x="725" y="95" width="50" height="50" />\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="Gateway_115ds54_di" bpmnElement="Gateway_115ds54" isMarkerVisible="true">\n'+
          '<omgdc:Bounds x="965" y="95" width="50" height="50" />\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="Event_160e3e0_di" bpmnElement="Event_160e3e0">\n'+
          '<omgdc:Bounds x="1062" y="102" width="36" height="36" />\n'+
          '<bpmndi:BPMNLabel>\n'+
            '<omgdc:Bounds x="1069" y="145" width="23" height="14" />\n'+
          '</bpmndi:BPMNLabel>\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">\n'+
          '<omgdc:Bounds x="132" y="102" width="36" height="36" />\n'+
          '<bpmndi:BPMNLabel>\n'+
            '<omgdc:Bounds x="140" y="145" width="23" height="14" />\n'+
          '</bpmndi:BPMNLabel>\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">\n'+
          '<omgdc:Bounds x="190" y="80" width="100" height="80" />\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="Gateway_1atgzpg_di" bpmnElement="Gateway_1atgzpg" isMarkerVisible="true">\n'+
          '<omgdc:Bounds x="315" y="95" width="50" height="50" />\n'+
        '</bpmndi:BPMNShape>\n'+
        '<bpmndi:BPMNShape id="Activity_0k4p49d_di" bpmnElement="Activity_0k4p49d">\n'+
          '<omgdc:Bounds x="840" y="80" width="100" height="80" />\n'+
        '</bpmndi:BPMNShape>\n'+
      '</bpmndi:BPMNPlane>\n'+
    '</bpmndi:BPMNDiagram>\n'+
  '</definitions>',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init () {
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas,
        additionalModules: [ customModule, {zoomScroll: ['value', '']}]
      })
      this.xmlUrl = await this.getXmlUrl()
      this.createNewDiagram()
		},
    getXmlUrl () {
      return new Promise(resolve => {
        setTimeout(() => {
          // const url = 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/mock1.bpmn'
          const url = ''
          resolve(url)
        }, 1000)
      })
    },
		async createNewDiagram () {
      const that = this
      let bpmnXmlStr = ''
      if (that.xmlUrl === '') {
        bpmnXmlStr = this.defaultXmlStr
        that.transformCanvas(bpmnXmlStr)
      }else {
        let res = await axios({
            method: 'get',
            timeout: 120000,
            url: that.xmlUrl,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        console.log(res)
        bpmnXmlStr = res['data']
        that.transformCanvas(bpmnXmlStr)
      }
		},
    // 将字符串转换成图并渲染
    transformCanvas(bpmnXmlStr) {
      this.bpmnModeler.importXML(bpmnXmlStr, (err) => {
        if (err) {
          console.error(err)
        } else {
          this.success()
        }
        // 让图能自适应屏幕
        var canvas = this.bpmnModeler.get('canvas')
        canvas.zoom('fit-viewport')
      })
    },
		success () {
      console.log('创建成功!')
		},
     // 当图发生改变的时候会调用这个函数，这个data就是图的xml
    setEncoded(link, name, data) {
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data)
      // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
      let xmlFile = new File([data], 'test.bpmn')
      if (data) {
        link.className = 'active'
        link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
        link.download = name
      }
      this.defaultXmlStr = JSON.stringify(data)
    },
    save() {
      const downloadLink = this.$refs.saveBtn
      // 把传入的done再传给bpmn原型的saveXML函数调用
      this.saveDiagram((err, xml)=> {
        this.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml)
        this.$router.push('/workProcess/processManage')
      })
    },
    saveDiagram(done) {
      // 把传入的done再传给bpmn原型的saveXML函数调用
      this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
          done(err, xml)
      })
    },
    cancel() {
      this.$router.push('/workProcess/processManage')
    }
  },
}
</script>

<style lang="scss" scoped>
.containers{
  padding: 20px;
	background-color: #ffffff;
	width: 100%;
	height: calc(100vh - 90px);
}
.canvas{
	width: 100%;
	height: 500px;
}
::v-deep .bjs-powered-by {
  display: none !important;
}
::v-deep .djs-palette {
  width: 50px !important;
  height: 480px;
  .djs-palette-entries .group:nth-of-type(5),
  .djs-palette-entries .group:nth-of-type(6),
  .djs-palette-entries .group:nth-of-type(7),
  .djs-palette-entries .group:nth-of-type(8),
  .djs-palette-entries .group:nth-of-type(9) {
    display: none !important;
  }
}
</style>