import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import './style.css';

cytoscape.use(coseBilkent);

//데이터 형식

const data = [
    //노드 정의 
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

    // 두 노드 간 엣지 정의 
    {
        "data": { "id": "test0", "source": "2", "target": "1" }
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
const nodeActiveSize = 20;
const fontMaxSize = 8;
const fontMinSize = 5;
const fontActiveSize = 7;

const edgeWidth = '2px';
var edgeActiveWidth = '4px';
const arrowScale = 0.8;
const arrowActiveScale = 1.2;
// edge & arrow 크기값

const dimColor = '#e0f7fa';       // 흐린 청록색 - 비활성화된 요소
const edgeColor = '#b2ebf2';      // 연한 청록색 - 기본 엣지
const nodeColor = '#00796b';      // 짙은 청록색 - 기본 노드
const nodeActiveColor = '#00bcd4'; // 밝은 청록색 - 활성화된 노드

const successorColor = '#4fc3f7'; // 후속 노드 및 엣지 색상
const predecessorsColor = '#0288d1'; // 상위 노드 및 엣지 색상

// 하위 node & edge color
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
              // 변경된 부분
                'width': edgeWidth,
                'curve-style': 'bezier',
                'line-color': edgeColor,
                'source-arrow-color': edgeColor,
                'source-arrow-shape': 'vee',
                'arrow-scale': arrowScale
              //
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


function setDimStyle(target_cy, style) {
    target_cy.nodes().forEach(function (target) {
        target.style(style);
    });
    target_cy.edges().forEach(function (target) {
        target.style(style);
    });
}

function setFocus(target_element, successorColor, predecessorsColor, edgeWidth, arrowScale) {
    target_element.style('background-color', nodeActiveColor);
    target_element.style('color', nodeColor);
    target_element.successors().each(function (e) {
        // 상위  엣지와 노드
        if (e.isEdge()) {
            e.style('width', edgeWidth);
            e.style('arrow-scale', arrowScale);
        }
        e.style('color', nodeColor);
        e.style('background-color', successorColor);
        e.style('line-color', successorColor);
        e.style('source-arrow-color', successorColor);
        setOpacityElement(e, 0.5);
    }
    );
    target_element.predecessors().each(function (e) {
        // 하위 엣지와 노드
        if (e.isEdge()) {
            e.style('width', edgeWidth);
            e.style('arrow-scale', arrowScale);
        }
        e.style('color', nodeColor);
        e.style('background-color', predecessorsColor);
        e.style('line-color', predecessorsColor);
        e.style('source-arrow-color', predecessorsColor);
        setOpacityElement(e, 0.5);
    });
    target_element.neighborhood().each(function (e) {
        // 이웃한 엣지와 노드
        setOpacityElement(e, 1);
    }
    );
    target_element.style('width', Math.max(parseFloat(target_element.style('width')), nodeActiveSize));
    target_element.style('height', Math.max(parseFloat(target_element.style('height')), nodeActiveSize));
    target_element.style('font-size', Math.max(parseFloat(target_element.style('font-size')), fontActiveSize));
}

function setOpacityElement(target_element, degree) {
    target_element.style('opacity', degree);
}

function setResetFocus(target_cy) {
    target_cy.nodes().forEach(function (target) {
        target.style('background-color', nodeColor);
        var rank = pageRank.rank(target);
        target.style('width', nodeMaxSize * rank + nodeMinSize);
        target.style('height', nodeMaxSize * rank + nodeMinSize);
        target.style('font-size', fontMaxSize * rank + fontMinSize);
        target.style('color', nodeColor);
        target.style('opacity', 1);
    });
    target_cy.edges().forEach(function (target) {
        target.style('line-color', edgeColor);
        target.style('source-arrow-color', edgeColor);
        target.style('width', edgeWidth);
        target.style('arrow-scale', arrowScale);
        target.style('opacity', 1);
    });
}

let resizeTimer;


//

cy.on('tapstart mouseover', 'node', function (e) {
    setDimStyle(cy, {
        'background-color': dimColor,
        'line-color': dimColor,
        'source-arrow-color': dimColor,
        'color': dimColor
    });

    setFocus(e.target, successorColor, predecessorsColor, edgeActiveWidth, arrowActiveScale);
});

cy.on('tapend mouseout', 'node', function (e) {
    setResetFocus(e.cy);
});


window.addEventListener('resize', function () {
    this.clearTimeout(resizeTimer);
    resizeTimer = this.setTimeout(function(){
        cy.fit();
    },200);
});