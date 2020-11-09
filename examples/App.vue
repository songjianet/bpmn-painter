<template>
  <bpmn-painter
      :data="data"
      @save="save">
  </bpmn-painter>
</template>

<script>
import BpmnPainter from '../package/components/BpmnPainter'
import '../dist/bpmn-painter.css'
import '../package/assets/scss/default.scss'

export default {
  data() {
    return {
      data: [
        // 触点类型
        {
          action: 'create.official-account-code',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/chudianleixing/gongzhonghao.png',
          title: '公众号二维码',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '触点类型'
        },
        {
          action: 'create.interface',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/chudianleixing/jiekou.png',
          title: '接口',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '触点类型'
        },
        {
          action: 'create.register',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/chudianleixing/zhuce.png',
          title: '注册页面',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '触点类型'
        },
        {
          action: 'create.mini-program-code',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/chudianleixing/xiaochengxu.png',
          title: '小程序二维码',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '触点类型'
        },
        {
          action: 'create.company-wechat-code',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/chudianleixing/qiyeweixin.png',
          title: '企业微信二维码',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '触点类型'
        },
        {
          action: 'create.product-code',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/chudianleixing/chanpinma.png',
          title: '产品码',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '触点类型'
        },
        // 沟通渠道
        {
          action: 'create.wechat-customer-message',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/kefuxiaoxi.png',
          title: '微信客服消息',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.wechat-graphic-message',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/tuwenxiaoxi.png',
          title: '微信图文消息',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.wechat-template-message',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/mubanxiaoxi.png',
          title: '微信模板消息',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.mini-program-dialog',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/xiaochengxutanchuang.png',
          title: '小程序弹窗',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.mini-program-subscription-message',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/dingyuexiaoxi.png',
          title: '小程序订阅消息',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.mobile-sms',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/caixin.png',
          title: '手机短彩信',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.product-wechat-message',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/qiyeweixinxiaoxi.png',
          title: '企业微信消息',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.product-wechat-chat',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/qiyeweixinliaotian.png',
          title: '企业微信聊天',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.mobile-communication',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/dianhua.png',
          title: '导购电话沟通',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.mini-program-open',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/kaiping.png',
          title: '小程序开屏',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.task-list',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/renwuqingdan.png',
          title: '任务清单',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        {
          action: 'create.personalized-recommendation',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/tuijian.png',
          title: '个性化推荐',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '沟通渠道'
        },
        // 激励方式
        {
          action: 'create.coupon',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/jilifangshi/youhuiquan.png',
          title: '优惠券',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '激励方式'
        },
        {
          action: 'create.medal',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/jilifangshi/xunzhang.png',
          title: '勋章',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '激励方式'
        },
        {
          action: 'create.privilege',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/jilifangshi/tequan.png',
          title: '特权',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '激励方式'
        },
        {
          action: 'create.integral',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/jilifangshi/jifen.png',
          title: '积分 / 能量值',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '激励方式'
        },
        {
          action: 'create.red-envelope',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/jilifangshi/hongbao.png',
          title: '红包',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '激励方式'
        },
        {
          action: 'create.gift',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/jilifangshi/lipin.png',
          title: '礼品',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '激励方式'
        },
        // 事件集合
        {
          action: 'create.scan-code',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shijianjihe/saoma.png',
          title: '扫码',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '事件集合'
        },
        {
          action: 'create.attention',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shijianjihe/guanzhu.png',
          title: '关注',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '事件集合'
        },
        {
          action: 'create.register-member',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shijianjihe/zhucehuiyuan.png',
          title: '注册会员',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '事件集合'
        },
        {
          action: 'create.register-product',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shijianjihe/zhucechanpin.png',
          title: '注册产品',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '事件集合'
        },
        {
          action: 'create.click-event',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shijianjihe/dianji.png',
          title: '点击',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '事件集合'
        },
        {
          action: 'create.share',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shijianjihe/fenxiang.png',
          title: '分享',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '事件集合'
        },
        // 数字平台
        {
          action: 'create.official-account',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shuzipingtai/gongzhonghao.png',
          title: '公众号',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '数字平台'
        },
        {
          action: 'create.mini-program',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shuzipingtai/xiaochengxu.png',
          title: '小程序',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '数字平台'
        },
        {
          action: 'create.company-wechat',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shuzipingtai/qiyeweixin.png',
          title: '企业微信',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '数字平台'
        },
        {
          action: 'create.html5',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shuzipingtai/html5.png',
          title: 'html5',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '数字平台'
        },
        // 人群选择
        {
          action: 'create.tag-select',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/renqunxuanze/biaoqianxuanze.png',
          title: '标签',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '人群选择'
        },
        {
          action: 'create.event-select',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/renqunxuanze/shijianxuanze.png',
          title: '事件',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '人群选择'
        },
        {
          action: 'create.import-algorithm-select',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/renqunxuanze/daorusuanfaxuanze.png',
          title: '导入算法',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '人群选择'
        },
        {
          action: 'create.integral-select',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/renqunxuanze/jifenxuanze.png',
          title: '积分',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '人群选择'
        },
        {
          action: 'create.growing-up-value-select',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/renqunxuanze/chengzhangzhixuanze.png',
          title: '成长值',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '人群选择'
        },
        {
          action: 'create.tag-value-select',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/renqunxuanze/biaoqianfenxuanze.png',
          title: '标签分',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '人群选择'
        },
        // 规则中心
        {
          action: 'create.condition-rule',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/guizezhongxin/tiaojianguize.png',
          title: '条件规则',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '规则中心'
        },
        {
          action: 'create.important-algorithm-rule',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/guizezhongxin/daorusuanfaguize.png',
          title: '导入算法规则',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '规则中心'
        },
        // 活动团队
        {
          action: 'create.pull-in-the-team',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/huodongtuandui/larutuandui.png',
          title: '拉入团队',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '活动团队'
        },
        {
          action: 'create.assign-activity-tasks',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/huodongtuandui/huodongtuandui-fenpeirenwu.png',
          title: '分配活动团队任务',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '活动团队'
        },
        {
          action: 'create.move-out-of-the-team',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/huodongtuandui/yichutuandui.png',
          title: '移除团队',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '活动团队'
        },
        // 流程控制
        {
          action: 'create.begin',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/liuchengkongzhi/start.png',
          title: '开始',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '流程控制'
        },
        {
          action: 'create.logout',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/liuchengkongzhi/logout.png',
          title: '退出',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '流程控制'
        },
        {
          action: 'create.end',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/liuchengkongzhi/end.png',
          title: '结束',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '流程控制'
        },
        {
          action: 'create.branch',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/liuchengkongzhi/fenzhi.png',
          title: '分支',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '流程控制'
        },
        {
          action: 'create.time-control',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/liuchengkongzhi/time.png',
          title: '时间控制',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '流程控制'
        },
        {
          action: 'create.a-b-test',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/liuchengkongzhi/ab.png',
          title: 'AB测试',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '流程控制'
        },
        // 系统内置
        {
          action: 'create.boundary-clock',
          image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/xitongneizhi/bianjiejishiqi.png',
          title: '边界计时器',
          type: 'bpmn:Task',
          group: 'activity',
          shapeGroup: '系统内置'
        }
      ]
    }
  },
  methods: {
    save(data) {
      console.log(data)
    }
  },
  components: {
    BpmnPainter
  }
}
</script>
