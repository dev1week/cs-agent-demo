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
    {
        "data": {
            "id": "OS1",
            "title": "Operating System",
            "position": { "x": 100, "y": 100 }
        }
    },
    {
        "data": {
            "id": "OS2",
            "title": "프로세스 관리"
        }
    },
    {
        "data": {
            "id": "OS3",
            "title": "메모리 관리"
        }
    },
    {
        "data": {
            "id": "OS4",
            "title": "저장장치 관리"
        }
    },
    {
        "data": {
            "id": "OS5",
            "title": "스케줄링"
        }
    },
    {
        "data": {
            "id": "OS6",
            "title": "CPU 스케줄러"
        }
    },
    {
        "data": { "id": "edge0", "source": "OS1", "target": "OS2" }
    },
    {
        "data": { "id": "edge1", "source": "OS1", "target": "OS3" }
    },
    {
        "data": { "id": "edge2", "source": "OS1", "target": "OS4" }
    },
    {
        "data": { "id": "edge3", "source": "OS1", "target": "OS5" }
    },
    {
        "data": { "id": "edge4", "source": "OS1", "target": "OS6" }
    },
    {
        "data": {
            "id": "OS2_1",
            "title": "프로세스와 스레드"
        }
    },
    {
        "data": {
            "id": "OS2_2",
            "title": "CPU 스케줄링"
        }
    },
    {
        "data": {
            "id": "OS2_3",
            "title": "프로세스 동기화"
        }
    },
    {
        "data": {
            "id": "OS2_4",
            "title": "교착 상태"
        }
    },
    {
        "data": {
            "id": "OS2_5",
            "title": "멀티스레딩"
        }
    },
    {
        "data": { "id": "edge5", "source": "OS2", "target": "OS2_1" }
    },
    {
        "data": { "id": "edge6", "source": "OS2", "target": "OS2_2" }
    },
    {
        "data": { "id": "edge7", "source": "OS2", "target": "OS2_3" }
    },
    {
        "data": { "id": "edge8", "source": "OS2", "target": "OS2_4" }
    },
    {
        "data": { "id": "edge9", "source": "OS2", "target": "OS2_5" }
    },
    {
        "data": {
            "id": "OS3_1",
            "title": "메모리란"
        }
    },
    {
        "data": {
            "id": "OS3_2",
            "title": "물리 메모리"
        }
    },
    {
        "data": {
            "id": "OS3_3",
            "title": "가상 메모리"
        }
    },
    {
        "data": {
            "id": "OS3_4",
            "title": "페이징 기법"
        }
    },
    {
        "data": { "id": "edge10", "source": "OS3", "target": "OS3_1" }
    },
    {
        "data": { "id": "edge11", "source": "OS3", "target": "OS3_2" }
    },
    {
        "data": { "id": "edge12", "source": "OS3", "target": "OS3_3" }
    },
    {
        "data": { "id": "edge13", "source": "OS3", "target": "OS3_4" }
    },
    {
        "data": {
            "id": "OS4_1",
            "title": "입출력 시스템"
        }
    },
    {
        "data": {
            "id": "OS4_2",
            "title": "저장장치"
        }
    },
    {
        "data": { "id": "edge14", "source": "OS4", "target": "OS4_1" }
    },
    {
        "data": { "id": "edge15", "source": "OS4", "target": "OS4_2" }
    },
    {
        "data": {
            "id": "OS6_1",
            "title": "FCFS (First-Come, First-Served)"
        }
    },
    {
        "data": {
            "id": "OS6_2",
            "title": "SJF (Shortest Job First)"
        }
    },
    {
        "data": { "id": "edge16", "source": "OS6", "target": "OS6_1" }
    },
    {
        "data": { "id": "edge17", "source": "OS6", "target": "OS6_2" }
    },
    {
        "data": {
            "id": "Network1",
            "title": "Network",
            "position": { "x": 100, "y": 100 }
        }
    },
    {
        "data": {
            "id": "Network1",
            "title": "Network",
            "position": { "x": 100, "y": 100 }
        }
    },
    {
        "data": {
            "id": "Network2",
            "title": "Web"
        }
    },
    {
        "data": {
            "id": "Network3",
            "title": "응용 계층"
        }
    },
    {
        "data": {
            "id": "Network4",
            "title": "전송 계층"
        }
    },
    {
        "data": {
            "id": "Network5",
            "title": "네트워크 계층"
        }
    },
    {
        "data": { "id": "edge100", "source": "Network1", "target": "Network2" }
    },
    {
        "data": { "id": "edge101", "source": "Network1", "target": "Network3" }
    },
    {
        "data": { "id": "edge102", "source": "Network1", "target": "Network4" }
    },
    {
        "data": { "id": "edge103", "source": "Network1", "target": "Network5" }
    },
    {
        "data": {
            "id": "Network2_1",
            "title": "웹 통신 흐름"
        }
    },
    {
        "data": {
            "id": "Network2_2",
            "title": "RESTful"
        }
    },
    {
        "data": {
            "id": "Network2_3",
            "title": "Web Server (Apache, Nginx)"
        }
    },
    {
        "data": {
            "id": "Network2_4",
            "title": "Cookie & Session"
        }
    },
    {
        "data": { "id": "edge104", "source": "Network2", "target": "Network2_1" }
    },
    {
        "data": { "id": "edge105", "source": "Network2", "target": "Network2_2" }
    },
    {
        "data": { "id": "edge106", "source": "Network2", "target": "Network2_3" }
    },
    {
        "data": { "id": "edge107", "source": "Network2", "target": "Network2_4" }
    },
    {
        "data": {
            "id": "Network3_1",
            "title": "DNS"
        }
    },
    {
        "data": {
            "id": "Network3_2",
            "title": "도메인 서버와 네임서버"
        }
    },
    {
        "data": {
            "id": "Network3_3",
            "title": "URI"
        }
    },
    {
        "data": {
            "id": "Network3_4",
            "title": "HTTP"
        }
    },
    {
        "data": {
            "id": "Network3_5",
            "title": "HTTP/1.1, HTTP/2.0"
        }
    },
    {
        "data": {
            "id": "Network3_6",
            "title": "HTTPS"
        }
    },
    {
        "data": { "id": "edge108", "source": "Network3", "target": "Network3_1" }
    },
    {
        "data": { "id": "edge109", "source": "Network3", "target": "Network3_2" }
    },
    {
        "data": { "id": "edge110", "source": "Network3", "target": "Network3_3" }
    },
    {
        "data": { "id": "edge111", "source": "Network3", "target": "Network3_4" }
    },
    {
        "data": { "id": "edge112", "source": "Network3", "target": "Network3_5" }
    },
    {
        "data": { "id": "edge113", "source": "Network3", "target": "Network3_6" }
    },
    {
        "data": {
            "id": "Network4_1",
            "title": "PORT"
        }
    },
    {
        "data": {
            "id": "Network4_2",
            "title": "NAPT"
        }
    },
    {
        "data": {
            "id": "Network4_3",
            "title": "NAT"
        }
    },
    {
        "data": {
            "id": "Network4_4",
            "title": "TCP"
        }
    },
    {
        "data": {
            "id": "Network4_5",
            "title": "3-way handshake, 4-way handshake"
        }
    },
    {
        "data": {
            "id": "Network4_6",
            "title": "UDP"
        }
    },
    {
        "data": {
            "id": "Network4_7",
            "title": "TCP의 오류, 혼잡, 흐름 제어 (ARQ, 슬라이딩 윈도우, 혼잡제어)"
        }
    },
    {
        "data": { "id": "edge114", "source": "Network4", "target": "Network4_1" }
    },
    {
        "data": { "id": "edge115", "source": "Network4", "target": "Network4_2" }
    },
    {
        "data": { "id": "edge116", "source": "Network4", "target": "Network4_3" }
    },
    {
        "data": { "id": "edge117", "source": "Network4", "target": "Network4_4" }
    },
    {
        "data": { "id": "edge118", "source": "Network4", "target": "Network4_5" }
    },
    {
        "data": { "id": "edge119", "source": "Network4", "target": "Network4_6" }
    },
    {
        "data": { "id": "edge120", "source": "Network4", "target": "Network4_7" }
    },
    {
        "data": {
            "id": "Network5_1",
            "title": "IPv4, IPv6"
        }
    },
    {
        "data": {
            "id": "Network5_2",
            "title": "서브넷 마스크"
        }
    },
    {
        "data": {
            "id": "Network5_3",
            "title": "CIDR 표기법"
        }
    },
    {
        "data": {
            "id": "Network5_4",
            "title": "공인 IP와 사설 IP"
        }
    },
    {
        "data": {
            "id": "Network5_5",
            "title": "정적 주소 할당과 동적 주소 할당"
        }
    },
    {
        "data": {
            "id": "Network5_6",
            "title": "라우터"
        }
    },
    {
        "data": {
            "id": "Network5_7",
            "title": "정적 라우팅"
        }
    },
    {
        "data": {
            "id": "Network5_8",
            "title": "동적 라우팅"
        }
    },
    {
        "data": {
            "id": "Network5_9",
            "title": "IGP (RIP, OSPF)"
        }
    },
    {
        "data": {
            "id": "Network5_10",
            "title": "EGP (BGP)"
        }
    },
    {
        "data": { "id": "edge121", "source": "Network5", "target": "Network5_1" }
    },
    {
        "data": { "id": "edge122", "source": "Network5", "target": "Network5_2" }
    },
    {
        "data": { "id": "edge123", "source": "Network5", "target": "Network5_3" }
    },
    {
        "data": { "id": "edge124", "source": "Network5", "target": "Network5_4" }
    },
    {
        "data": { "id": "edge125", "source": "Network5", "target": "Network5_5" }
    },
    {
        "data": { "id": "edge126", "source": "Network5", "target": "Network5_6" }
    },
    {
        "data": { "id": "edge127", "source": "Network5", "target": "Network5_7" }
    },
    {
        "data": { "id": "edge128", "source": "Network5", "target": "Network5_8" }
    },
    {
        "data": { "id": "edge129", "source": "Network5", "target": "Network5_9" }
    }
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
                'width': 30, // Increase node width
                'height': 30, // Increase node height
                'font-size': 8, // Increase font size for readability
                'text-valign': 'center', // Center label vertically
                'text-halign': 'center' // Center label horizontally
            }
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
        gravityRangeCompound: 2.0, // Adjust gravity to allow more spacing between compound nodes
        nodeRepulsion: 4500, // Increase repulsion to spread nodes apart
        idealEdgeLength: 100, // Set a larger edge length to space nodes further apart
        fit: true,
        tile: true
    }
});



// Adjust font size initially

// Add event listener for zoom
// Automatically find all root nodes (nodes with no incoming edges)
const rootNodes = cy.nodes().filter(node => node.incomers('edge').length === 0);
rootNodes.forEach(rootNode => {
    rootNode.style('font-size', '20px'); // Set font size for each root node
});

// Function to adjust font size for non-root nodes based on zoom level
function adjustFontSize() {
    const zoomLevel = cy.zoom();
    const baseFontSize = 10; // Base font size for non-root nodes when zoom is 1
    const scaledFontSize = Math.max(baseFontSize * zoomLevel, 5); // Ensure a minimum font size of 5

    // Apply dynamic font size to nodes that are not root nodes
    cy.nodes().not(rootNodes).style('font-size', `${scaledFontSize}px`);
}
adjustFontSize();


// Func

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
        'color':  '#b81414', // 현재 노드 글자 색상 하이라이트
        'font-weight': 'bold' // 글자 굵기
    });
    predecessors.style({
        'background-color': predecessorsColor, // 상위 노드 배경 하이라이트
        'color': '#b81414', // 상위 노드 글자 색상 하이라이트
        'font-weight': 'bold'
    });
    successors.style({
        'background-color': successorColor, // 하위 노드 배경 하이라이트
        'color': '#b81414', // 하위 노드 글자 색상 하이라이트
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