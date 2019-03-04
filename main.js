$(function () {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;

    if (isIE || isEdge || isIE11) {
        alert('为了更好的体验，建议您使用谷歌浏览器或火狐浏览器进行访问。')
    }

    var dom = document.createElement('div');
    dom.id = 'words';
    dom.style.width = '1400px';
    dom.style.height = '700px';
    var words = echarts.init(dom, null, {renderer: 'canvas'});
    globe = echarts.init(document.getElementById('chart'));
    var words_option = {
            tooltip: {
                show: false,
            },
            series: [{
                name: '',
                type: 'wordCloud',
                left: 0,
                top: '35%',
                width: '100%',
                height: '25%',
                data: [
                    {name: '债务风险', value: 1},
                    {name: '课程建设', value: 2},
                    {name: '人工智能AI', value: 1},
                    {name: '大众心理', value: 1},
                    {name: '毕业设计', value: 1},
                    {name: '新能源汽车', value: 1},
                    {name: '可持续发展', value: 2},
                    {name: '中美贸易战', value: 2},
                    {name: '自然语言', value: 1},
                    {name: '利益幻象', value: 1},
                    {name: '视角形象', value: 1},
                    {name: '幸福是奋斗出来的', value: 1},
                    {name: '回归', value: 1},
                    {name: '自然fg语言', value: 1},
                    {name: '丰厚的', value: 1},
                    {name: '电饭锅', value: 1},
                    {name: '东方红', value: 1},
                    {name: '㔿', value: 1},
                    {name: '和规范化', value: 1},
                    {name: '黄金分割', value: 1},
                    {name: '发的发广告', value: 1},
                    {name: '散热网地方', value: 1},
                    {name: '黄金卡计划', value: 1},
                    {name: '炬华科技', value: 1},
                    {name: '撒旦法', value: 1},
                    {name: '都是范德萨', value: 1},
                    {name: '防守打法', value: 1},
                    {name: '风格和规范', value: 1},
                    {name: '国际化', value: 1},
                    {name: '发光飞碟', value: 1},
                    {name: '贵航股份', value: 1},
                    {name: '发给发动机', value: 1},
                    {name: '结核杆菌', value: 1},
                    {name: '东方闪电', value: 1},
                    {name: '啊实打实', value: 1},
                    {name: '阿萨 ', value: 1},
                    {name: '很关键', value: 1},
                    {name: '风格很反感', value: 1},
                    {name: '梵蒂冈', value: 1},
                    {name: '规范化', value: 1},
                    {name: '刚发的', value: 1},
                    {name: '各具特色', value: 1},
                    {name: '合同', value: 1},
                    {name: '大润发 ', value: 1},
                    {name: '返回', value: 1}
                ],
                sizeRange: [12, 20],
                rotationRange: [0, 0],
                gridSize: 60,
                autoSize: {
                    enable: true,
                    minSize: 14
                }
            }],
            animation: false,
            textStyle: {
                normal: {
                    fontWeight: 'bold',
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')'
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
        },
        globe_option = {
            backgroundColor: '#000',
            globe: {
                baseTexture: '',
                displacementScale: 0.1,
                height: '80%',
                top: 'middle',
                viewControl: {
                    zoomSensitivity: 0
                },
                light: {
                    ambient: {
                        intensity: 0.8
                    },
                    main: {
                        intensity: 1.2
                    }
                },
                layers: [{
                    type: 'overlay',
                    texture: '',
                    shading: 'lambert',
                    distance: 10
                }]
            },
            series: [],
            animation: false
        };

    globe.showLoading({
        backgroundColor: 'transparent',
        color: '#ccc'
    });
    words.setOption(words_option);

    var earth_img = new Image;
    earth_img.src = './earth.jpg';

    var timmer = null;
    timmer = setInterval(function () {
        var wordsPic = words.getDataURL({
            pixelRatio: 2,
            backgroundColor: 'transparent'
        });
        globe_option.globe.layers[0].texture = wordsPic;
        if (earth_img.complete) {
            clearInterval(timmer);
            globe_option.globe.baseTexture = earth_img.src;
            globe_option.globe.show = true;
            globe.setOption(globe_option, false, true);
            globe.hideLoading();
        }
    }, 500)
})