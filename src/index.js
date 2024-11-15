import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import './style.css';

cytoscape.use(coseBilkent);

//데이터 형식

const data = [
    // 노드 정의
    {
        "data": {
            "id": "1",
            "url": "https://namu.wiki/w/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0",
            "title": "자료구조",
            "position": { "x": 100, "y": 200 }
        }
    },
    {
        "data": {
            "id": "2",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "비선형 자료구조"
        }
    },

    // 두 노드 간 엣지 정의 (source와 target 변경)
    {
        "data": { "id": "test0", "source": "1", "target": "2" }
    },
    {
        "data": {
            "id": "3",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "선형 자료구조"
        }
    },
    {
        "data": { "id": "test", "source": "1", "target": "3" }
    },
    {
        "data": {
            "id": "4",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "해시테이블"
        }
    },
    {
        "data": { "id": "test1", "source": "1", "target": "4" }
    },
    {
        "data": {
            "id": "5",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "개념"
        }
    },
    {
        "data": { "id": "test2", "source": "3", "target": "5" }
    },
    {
        "data": {
            "id": "6",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "배열"
        }
    },
    {
        "data": { "id": "test3", "source": "3", "target": "6" }
    },
    {
        "data": {
            "id": "7",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "연결 리스트"
        }
    },
    {
        "data": { "id": "test4", "source": "3", "target": "7" }
    },
    {
        "data": {
            "id": "8",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "스택"
        }
    },
    {
        "data": { "id": "test5", "source": "3", "target": "8" }
    },
    {
        "data": {
            "id": "9",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "큐"
        }
    },
    {
        "data": { "id": "test6", "source": "3", "target": "9" }
    },
    {
        "data": {
            "id": "10",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "덱"
        }
    },
    {
        "data": { "id": "test7", "source": "3", "target": "10" }
    },
    {
        "data": {
            "id": "11",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "그래프"
        }
    },
    {
        "data": { "id": "test8", "source": "2", "target": "11" }
    },
    {
        "data": {
            "id": "12",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "트리"
        }
    },
    {
        "data": { "id": "test9", "source": "2", "target": "12" }
    },
    {
        "data": {
            "id": "13",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "힙"
        }
    },
    {
        "data": { "id": "test10", "source": "2", "target": "13" }
    },
    {
        "data": {
            "id": "14",
            "url": "https://namu.wiki/w/%EB%A6%AC%EC%8A%A4%ED%8A%B8(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",
            "title": "트라이"
        }
    },
    {
        "data": { "id": "test11", "source": "2", "target": "14" }
    },
];

const cy_for_rank = cytoscape({ elements: data });
const pageRank = cy_for_rank.elements().pageRank();

const nodeMaxSize = 20;
const nodeMinSize = 5;
const fontMaxSize = 8;
const fontMinSize = 5;
const edgeWidth = '2px';
const arrowScale = 0.8;
const edgeColor = '#b2ebf2';
const nodeColor = '#00796b';
const nodeActiveColor = '#0288d1';
const successorColor = '#4fc3f7';
const predecessorsColor = '#00bcd4';

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: data,
    style: [
        {
            selector: 'node',
            style: {
                'background-color': nodeColor,
                'label': 'data(title)',
                'width': 20,
                'height': 20,
                },
                'font-size': 10,
            
        },
        {
            selector: 'edge',
            style: {
                'width': edgeWidth,
                'curve-style': 'bezier',
                'line-color': edgeColor,
                'source-arrow-color': edgeColor,
                'source-arrow-shape': 'vee',
                'arrow-scale': arrowScale
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
    const url = e.target.data('url');
    if (url && url !== '') {
        window.open(url);
    }
});

const floatingButton = document.createElement('div');
floatingButton.id = 'floatingButton';
floatingButton.style.width = '30px';
floatingButton.style.height = '30px';
floatingButton.style.borderRadius = '50%';
floatingButton.style.backgroundColor = '#00796b';
floatingButton.style.position = 'absolute';
floatingButton.style.display = 'none';
floatingButton.style.justifyContent = 'center';
floatingButton.style.alignItems = 'center';
floatingButton.style.cursor = 'pointer';
floatingButton.innerText = '+';
document.body.appendChild(floatingButton);


// 삭제 버튼 생성 및 스타일 설정
const deleteButton = document.createElement('div');
deleteButton.id = 'deleteButton';
deleteButton.style.width = '30px';
deleteButton.style.height = '30px';
deleteButton.style.borderRadius = '50%';
deleteButton.style.backgroundColor = '#e53935'; // 삭제 버튼 색상
deleteButton.style.position = 'absolute';
deleteButton.style.display = 'none';
deleteButton.style.justifyContent = 'center';
deleteButton.style.alignItems = 'center';
deleteButton.style.color = '#FFFFFF';
deleteButton.style.fontWeight = 'bold';
deleteButton.style.cursor = 'pointer';
deleteButton.innerText = 'X';
document.body.appendChild(deleteButton);

//let selectedNodeId = null;


deleteButton.addEventListener('click', function () {
    if (selectedNodeId) {
        const nodeToDelete = cy.getElementById(selectedNodeId);
        nodeToDelete.remove(); // 선택된 노드 삭제
        deleteButton.style.display = 'none'; // 버튼 숨기기
        selectedNodeId = null; // 선택된 노드 초기화
    }
});

let selectedNodeId = null;


cy.on('mouseover', 'node', function (e) {
    const node = e.target;
    const nodePosition = e.renderedPosition || e.position;
    selectedNodeId = node.id();

    // 원형으로 배치할 반지름 설정
    const radius = nodeMaxSize; // 노드에서 버튼들이 떨어진 거리
    const angleFloating = 0; // 플로팅 버튼 각도 (0도)
    const angleDelete = Math.PI / 2; // 삭제 버튼 각도 (90도)

    // 플로팅 버튼 위치 설정 (노드 중심에서 특정 각도로 떨어지도록)
    floatingButton.style.display = 'flex';
    floatingButton.style.left = `${nodePosition.x + radius * Math.cos(angleFloating)}px`;
    floatingButton.style.top = `${nodePosition.y + radius * Math.sin(angleFloating)}px`;

    // 삭제 버튼 위치 설정 (노드 중심에서 다른 각도로 떨어지도록)
    deleteButton.style.display = 'flex';
    deleteButton.style.left = `${nodePosition.x + radius * Math.cos(angleDelete)}px`;
    deleteButton.style.top = `${nodePosition.y + radius * Math.sin(angleDelete)}px`;

    // 상위 노드와 하위 노드 선택
    const predecessors = node.incomers('node'); // 상위 노드
    const successors = node.outgoers('node'); // 하위 노드

    // 스타일 적용: 노드 배경색과 글자 스타일
    node.style({
        'background-color': nodeActiveColor, // 현재 노드 배경 하이라이트
        'color':  nodeActiveColor, // 현재 노드 글자 색상 하이라이트
        'font-weight': 'bold' // 글자 굵기
    });
    predecessors.style({
        'background-color': predecessorsColor, // 상위 노드 배경 하이라이트
        'color': predecessorsColor, // 상위 노드 글자 색상 하이라이트
        'font-weight': 'bold'
    });
    successors.style({
        'background-color': successorColor, // 하위 노드 배경 하이라이트
        'color': successorColor, // 하위 노드 글자 색상 하이라이트
        'font-weight': 'bold'
    });
});

cy.on('mouseout', 'node', function () {
    // 하이라이트 제거
    const node = cy.getElementById(selectedNodeId);
    node.style({
        'background-color': nodeColor,
        'color': '#000000',
        'font-weight': 'normal'
    });
    node.incomers('node').style({
        'background-color': nodeColor,
        'color': '#000000',
        'font-weight': 'normal'
    });
    node.outgoers('node').style({
        'background-color': nodeColor,
        'color': '#000000',
        'font-weight': 'normal'
    });

    // 플로팅 버튼 및 삭제 버튼 숨기기
    floatingButton.style.display = 'none';
    deleteButton.style.display = 'none';
});

cy.on('mouseout', 'node', function (e) {
    const node = e.target;

    // 하이라이트 제거: 원래 색상과 글자 스타일로 복구
    node.style({
        'background-color': nodeColor, // 원래 색상으로 복구
        'color': '#000000', // 원래 글자 색상 복구
        'font-weight': 'normal' // 글자 굵기 복구
    });
    node.incomers('node').style({
        'background-color': nodeColor, 
        'color': '#000000',
        'font-weight': 'normal'
    });
    node.outgoers('node').style({
        'background-color': nodeColor, 
        'color': '#000000',
        'font-weight': 'normal'
    });

    // 버튼 숨기기
    floatingButton.style.display = 'none';
    deleteButton.style.display = 'none';
});
cy.on('mouseout', 'node', function (e) {
    const node = e.target;

    // 하이라이트 제거: 원래 색상과 글자 스타일로 복구
    node.style({
        'background-color': '#00796b', // 원래 색상으로 복구
        'color': '#000000', // 원래 글자 색상 복구
        'font-weight': 'normal' // 글자 굵기 복구
    });
    node.incomers('node').style({
        'background-color': '#00796b', 
        'color': '#000000',
        'font-weight': 'normal'
    });
    node.outgoers('node').style({
        'background-color': '#00796b', 
        'color': '#000000',
        'font-weight': 'normal'
    });

    // 버튼 숨기기
    floatingButton.style.display = 'none';
});
floatingButton.addEventListener('click', function () {
    if (!selectedNodeId) {
        console.error("선택된 노드가 없습니다.");
        return;
    }

    const newNodeId = Math.floor(Math.random() * 1000000000).toString();
    const newPosition = cy.getElementById(selectedNodeId).position();

    if (cy.getElementById(newNodeId).empty()) {
        // 새 노드와 엣지 추가
        cy.add([
            {
                group: 'nodes',
                data: { id: newNodeId, title: '새 노드' },
                position: { x: newPosition.x + 50, y: newPosition.y + 50 }
            },
            {
                group: 'edges',
                data: { id: `edge-${selectedNodeId}-${newNodeId}`, source: selectedNodeId, target: newNodeId }
            }
        ]);

        


        // 레이아웃 재정렬
        cy.layout({ name: 'cose-bilkent' }).run();
    } else {
        console.error("중복된 ID입니다.");
    }
});


cy.on('grab', 'node', function (e) {
    floatingButton.style.display = 'none';
    deleteButton.style.display = 'none';
    const node = e.target;

    // 모든 하위 노드를 재귀적으로 가져오기 위한 함수 정의
    function getAllDescendants(node) {
        let descendants = node.outgoers('node');
        descendants.forEach((descendant) => {
            descendants = descendants.add(getAllDescendants(descendant)); // 재귀적으로 하위 노드 추가
        });
        return descendants;
    }

    const allDescendants = getAllDescendants(node); // 모든 하위 노드를 가져옴

    // 드래그 시작 시점의 노드 위치를 저장
    const initialPositions = {};
    allDescendants.add(node).forEach((n) => {
        initialPositions[n.id()] = { x: n.position().x, y: n.position().y };
    });

    // 드래그 중일 때 모든 하위 노드를 그래프 구조 그대로 유지하면서 함께 이동
    node.on('drag', function () {
        const dx = node.position().x - initialPositions[node.id()].x;
        const dy = node.position().y - initialPositions[node.id()].y;

        allDescendants.forEach((descendant) => {
            const initialPos = initialPositions[descendant.id()];
            descendant.position({
                x: initialPos.x + dx,
                y: initialPos.y + dy
            });
        });
    });

    // 드래그 종료 시점에 전체 그래프를 화면에 맞추기
    node.on('free', function () {
        cy.fit(); // 그래프를 전체 화면에 맞추기
    });
});
// 새로고침 버튼 생성 및 스타일 설정
const refreshButton = document.createElement('div');
refreshButton.id = 'refreshButton';
refreshButton.style.width = '50px';
refreshButton.style.height = '50px';
refreshButton.style.borderRadius = '50%';
refreshButton.style.backgroundColor = '#00796b';
refreshButton.style.color = '#FFFFFF';
refreshButton.style.display = 'flex';
refreshButton.style.justifyContent = 'center';
refreshButton.style.alignItems = 'center';
refreshButton.style.position = 'fixed';
refreshButton.style.bottom = '20px';
refreshButton.style.right = '20px';
refreshButton.style.cursor = 'pointer';
refreshButton.style.fontSize = '20px';
refreshButton.style.fontWeight = 'bold';
refreshButton.innerText = '⟳';
document.body.appendChild(refreshButton);


refreshButton.addEventListener('click', function () {
    cy.layout({
        name: 'cose-bilkent', // `cose-bilkent` 레이아웃을 사용해 그래프 재정렬
        animate: true,         // 애니메이션을 사용하여 부드럽게 정렬
        fit: true,             // 정렬 후 화면에 맞춤
        padding: 5            // 그래프와 화면 가장자리 간 여백 설정
    }).run();
});

let sourceNode = null; // 간선의 시작 노드를 저장할 변수

// 노드에서 마우스다운 시 시작 노드를 설정
cy.on('mousedown', 'node', function (e) {
    sourceNode = e.target;
});

// 마우스업 시 간선 생성
cy.on('mouseup', 'node', function (e) {
    const targetNode = e.target;

    // 시작 노드와 끝 노드가 존재하고 서로 다를 때만 간선 생성
    if (sourceNode && sourceNode !== targetNode) {
        // 간선 ID를 고유하게 생성
        const edgeId = `edge-${sourceNode.id()}-${targetNode.id()}`;

        // 간선 추가
        cy.add({
            group: 'edges',
            data: {
                id: edgeId,
                source: sourceNode.id(),
                target: targetNode.id()
            }
        });

        // 간선 생성 후 sourceNode 초기화
        sourceNode = null;
    }
});

// 마우스가 캔버스나 다른 요소에서 올라갔을 때 시작 노드 초기화
cy.on('mouseup', function (e) {
    if (e.target === cy) {
        sourceNode = null; // 캔버스에서 마우스 업 시 초기화
    }
});