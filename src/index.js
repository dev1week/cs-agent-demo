import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import './style.css';

cytoscape.use(coseBilkent);

const dimColor = '#dfe4ea';
const edgeColor = '#ced6e0';
const nodeColor = '#57606f';
const nodeActiveColor = '#ffa502';

const successorColor = '#ff6348';
// 상위 node & edge color
const predecessorsColor = '#1e90ff';
const data = [
    {
        "data": {
            "id": "1",
            "url": "https://namu.wiki/w/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0",
            "title": "자료구조"
        }
    },
    
    {
        "data": {
            "id": "2",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "비선형 자료구조"
        }
    },
    {
        "data": { "id": "ISSUE-packageJson->STUDY-npmInit", "source": "2", "target": "1" }
    },
    {
        "data": {
            "id": "3",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "선형 자료구조"
        }
    },
    {
        "data": { "id": "test", "source": "3", "target": "1" }
    },
    {
        "data": {
            "id": "4",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "해시테이블"
        }
    },
    {
        "data": { "id": "test1", "source": "4", "target": "1" }
    },
    {
        "data": {
            "id": "5",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "개념"
        }
    },
    {
        "data": { "id": "test2", "source": "5", "target": "3" }
    },
    {
        "data": {
            "id": "6",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "배열"
        }
    },
    {
        "data": { "id": "test3", "source": "6", "target": "3" }
    },
    {
        "data": {
            "id": "7",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "연결 리스트"
        }
    },
    {
        "data": { "id": "test4", "source": "7", "target": "3" }
    },
    {
        "data": {
            "id": "8",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "스택"
        }
    },
    {
        "data": { "id": "test5", "source": "8", "target": "3" }
    },
    {
        "data": {
            "id": "9",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "큐"
        }
    },
    {
        "data": { "id": "test6", "source": "9", "target": "3" }
    },
    {
        "data": {
            "id": "10",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "덱"
        }
    },
    {
        "data": { "id": "test7", "source": "10", "target": "3" }
    },
    {
        "data": {
            "id": "11",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "그래프"
        }
    },
    {
        "data": { "id": "test8", "source": "11", "target": "2" }
    },
    {
        "data": {
            "id": "12",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "트리"
        }
    },
    {
        "data": { "id": "test9", "source": "12", "target": "2" }
    },
    {
        "data": {
            "id": "13",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "힙"
        }
    },
    {
        "data": { "id": "test10", "source": "13", "target": "2" }
    },
    {
        "data": {
            "id": "14",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "트라이"
        }
    },
    {
        "data": { "id": "test11", "source": "14", "target": "2" }
    },
];


              
const cy_for_rank = cytoscape({
    elements: data
});
// rank를 활용하기 위해 data만 입력한 cytoscape 객체입니다

const pageRank = cy_for_rank.elements().pageRank();
// elements들의 rank들입니다.

const nodeMaxSize = 20;
const nodeMinSize = 5;
const fontMaxSize = 8;
const fontMinSize = 5;

const cy = cytoscape({

    container: document.getElementById('cy'), // container to render in

    elements: data,

    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'background-color': nodeColor,
                'label': 'data(title)', 
                'width': function (ele) {
                    return nodeMaxSize *  pageRank.rank('#' + ele.id())  + nodeMinSize;
                },
                'height': function (ele) {
                    return nodeMaxSize *  pageRank.rank('#' + ele.id()) + nodeMinSize;
                },
                'font-size': function (ele) {
                    return fontMaxSize *   pageRank.rank('#' + ele.id()) + fontMinSize;
                }
            }
        },

        {
            selector: 'edge',
            style: {
                'width': 1,
                'curve-style': 'bezier',
                'line-color': '#ccc',
                'source-arrow-color': '#ccc',
                'source-arrow-shape': 'vee'
            }
        }
    ],

    layout: {
        name: 'cose-bilkent',
        animate: false,
        gravityRangeCompound: 1.5,
        fit: true,
        tile: true
    }
});

cy.on('tap', function (e) {
    const url = e.target.data('url')
    if (url && url !== '') {
        window.open(url);
    }
});



let resizeTimer;

window.addEventListener('resize', function () {
    this.clearTimeout(resizeTimer);
    resizeTimer = this.setTimeout(function(){
        cy.fit();
    },200);
});
//