import request from '@/utils/request'

export function institutionList(query) {
  return request({
    url: '/system/tenant/list',
    method: 'get',
    params: query
  })
}

// 新增机构
export function insertTenant(data) {
  return request({
    url: '/system/tenant/insertTenant',
    method: 'post',
    data: data
  })
}