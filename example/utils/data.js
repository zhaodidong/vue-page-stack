export default {
  mainList: [
    {
      id: '0',
      background: 'linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)',
      icon: 'icongroup',
      message: '在vue-router上扩展，原有导航逻辑不需改变'
    },
    {
      id: '1',
      background: 'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
      icon: 'icononline-conference',
      message: 'push或者forward的时候重新渲染页面，Stack中会添加新渲染的页面'
    },
    {
      id: '2',
      background: 'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)',
      icon: 'icontalk',
      message:
        'back或者go(负数)的时候不会重新渲染，从Stack中读取先前的页面，会保留好先前的内容状态，例如表单内容，滚动条滑动的位置等'
    },
    {
      id: '3',
      background: 'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
      icon: 'iconpaper-plane',
      message: 'back或者go(负数)的时候会把不用的页面从Stack中移除'
    },
    {
      id: '4',
      background: 'linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)',
      icon: 'iconapp',
      message: 'replace会更新Stack中页面信息'
    },
    {
      id: '5',
      background: 'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)',
      icon: 'iconfiles-and-folders1',
      message: '重新渲染的时候有activited钩子函数触发'
    },
    {
      id: '6',
      background: 'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)',
      icon: 'iconfile',
      message: '支持浏览器的后退，前进事件'
    },
    {
      id: '7',
      background: 'linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)',
      icon: 'iconfolder',
      message: '支持响应路由参数的变化'
    },
    {
      id: '8',
      background: 'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
      icon: 'iconnotebook2'
    },
    {
      id: '9',
      background: 'linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%)',
      icon: 'iconmonitor'
    },
    {
      id: '10',
      background: 'linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%)',
      icon: 'iconcalendar2'
    },
    {
      id: '11',
      background: 'linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%)',
      icon: 'iconedit-tools'
    },
    {
      id: '12',
      background: 'linear-gradient( 135deg, #FAD7A1 10%, #E96D71 100%)',
      icon: 'iconchecklist'
    },
    {
      id: '13',
      background: 'linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%)',
      icon: 'icondraw'
    }
  ],
  productList: [
    {
      id: '0',
      name: '苹果（Apple） MacBook Pro13.3英寸 2018新款/2017款苹果笔记本电脑 17款银色/128G/无Bar/MPXR2CH/A',
      price: '8888.88',
      comment: '13万+条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      tags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png',
        'https://img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png'
      ],
      img: 'https://img10.360buyimg.com/n2/s240x240_jfs/t1/27576/27/10895/182437/5c8a7cddE228f270d/393920514d20b8b5.jpg!q70.jpg'
    },
    {
      id: '1',
      name: 'Apple MacBook Air 13.3英寸笔记本电脑 银色(2017款Core i5 处理器/8GB内存/128GB闪存 MQD32CH/A)',
      price: '5988',
      comment: '1500+条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      tags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png',
        'https://img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png'
      ],
      img: 'https://img11.360buyimg.com/n2/s240x240_jfs/t1/19909/19/2981/167543/5c231ea8Ed0bfe0c0/f3fb909386a790a4.jpg!q70.jpg'
    },
    {
      id: '2',
      price: '14188',
      comment: '4800+条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      name: 'Apple MacBook Pro 13.3英寸笔记本电脑 深空灰色 2018新款（四核八代i5 8G 256G固态硬盘 MR9Q2CH/A）',
      tags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png',
        'https://img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png'
      ],
      img: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/15445/5/2946/178160/5c2325f9Ee9236ae9/6c2a5e9f2d14489a.jpg!q70.jpg'
    },
    {
      id: '3',
      name: 'Apple MacBook Pro 13.3英寸笔记本电脑 银色 2018新款（四核八代i5 8G 256G固态硬盘 MR9U2CH/A）',
      price: '13452',
      comment: '8万+条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      tags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png',
        'https://img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png'
      ],
      img: 'https://img13.360buyimg.com/n2/s240x240_jfs/t21631/84/2298558907/306845/1e75dd0c/5b4ee806N5fdcb463.jpg!q70.jpg'
    },
    {
      id: '4',
      name: 'Apple MacBook Pro 15.4英寸笔记本电脑 深空灰色 配备2018新款（六核八代i7 16G 256G固态硬盘 MR932CH/A）',
      price: '18688',
      comment: '4800+条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      tags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png',
        'https://img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png'
      ],
      img:
        'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t19960/20/1662777286/277967/615ccafb/5b4f0dd7Nf3eb96b8.jpg!q70.dpg.webp'
    },
    {
      id: '6',
      name: 'Apple MacBook Air 13.3英寸笔记本电脑 银色(定制升级Core i7/8GB内存/128GB SSD闪存 Z0UU00022）',
      price: '6988',
      comment: '800+条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      tags: ['https://img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png'],
      img:
        'https://img11.360buyimg.com/mobilecms/s270x270_jfs/t1/21878/9/2966/167543/5c231e4fE1817c631/0fb5eb90a6cb7066.jpg!q70.dpg.webp'
    },
    {
      id: '7',
      name: 'Apple MacBook Air 13.3英寸笔记本电脑 深空灰色(2018款Retina屏/八代Core i5 /8GB内存/128GB闪存 MRE82CH/A)',
      price: '8999',
      comment: '16万条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      tags: ['https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png'],
      img:
        'https://img11.360buyimg.com/mobilecms/s270x270_jfs/t1/1220/37/13788/157410/5bd8a51bEe66a9536/b3cc2f3bf386bcbb.jpg!q70.dpg.webp'
    },
    {
      id: '8',
      name:
        'APPLE苹果 MacBook air13.3英寸2017年款苹果电脑笔记本商务轻薄本 标配+防水手提包+无线充电鼠标垫（下单送超值礼包） i5+8GB内存+128GB闪存 【D32】',
      price: '6058',
      comment: '480+条评价',
      shopName: 'Apple产品京东自营旗舰店',
      commentTags: [
        'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        'http://img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png'
      ],
      tags: ['https://img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png'],
      img:
        'https://img13.360buyimg.com/mobilecms/s270x270_jfs/t1/20924/13/11008/110310/5c8cb556Ec17fe165/b47f313d75f1aaa0.jpg!q70.dpg.webp'
    }
  ]
};