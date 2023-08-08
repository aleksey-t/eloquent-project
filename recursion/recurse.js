/*
 * рекурсивный обход дерева
 */

const tree = {
    title: "root",
    children: [
        {
            title: "branch 1",
            children: [
                {
                    title: "sub-branch 0",
                    children: []
                }
            ]
        },
        {
            title: "branch 2",
            children: [
                {
                    title: "sub-branch 1",
                    children: []
                },
                {
                    title: "sub-branch 2",
                    children: [
                        {
                            title: "sub-sub-branch 1",
                            children: []
                        },
                        {
                            title: "sub-sub-branch 2",
                            children: []
                        },
                        {
                            title: "sub-sub-branch 3",
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
};

function render(node, mountPoint) {
    const element = document.createElement('div');
    element.innerText = node.title;
    element.className = 'node';

    if (node.children.length > 0) {
        element.classList.add('has-children');
    }

    mountPoint.append(element);

    element.addEventListener('click', function (e) {
        e.stopPropagation();

        if (node.children.length > 0) {
            toggleNode(element);
        }
    });

    if (node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
            render(node.children[i], element);
        }
    }
}

render(tree, document.getElementById("root"));

// открывает/закрывает ветку
function toggleNode(node) {
    if (node) {
        console.log('toggle')
        node.classList.toggle('closed');
    }
}

class Node{
    constructor() {
    }
}