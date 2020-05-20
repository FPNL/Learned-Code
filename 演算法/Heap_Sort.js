function swap(data: number[], node1: number, node2: number) {
  [data[node1], data[node2]] = [data[node2], data[node1]];
}

function adjust(data: number[], root: number, boundNode: number) {
  let leftNode = root * 2 + 1;
  const rootData = data[root];
  for (leftNode; leftNode <= boundNode; leftNode = leftNode * 2 + 1) {
    if (leftNode < boundNode && data[leftNode] < data[leftNode + 1]) {
      leftNode++;
    }
    if (rootData >= data[leftNode]) {
      break;
    }
    data[Math.floor((leftNode - 1) / 2)] = data[leftNode];
  }
  data[Math.floor((leftNode - 1) / 2)] = rootData;
}

function heapSort(data: number[], maxBoundNode: number = data.length - 1) {
  const indexBeginFrom = 0;

  for (let rootIndex = Math.floor((maxBoundNode - 1) / 2); rootIndex >= indexBeginFrom; rootIndex--) {
    adjust(data, rootIndex, maxBoundNode);
  }

  for (let boundNode = maxBoundNode - 1; boundNode >= indexBeginFrom; boundNode--) {
    swap(data, 0, boundNode + 1);
    adjust(data, 0, boundNode);
  }
}

const arr = [2, 4, 3, 1, 5, 8, 6, 9, 7];
const arr2 = [2, 4, 3, 1, 5, 8, 6, 9, 7];
heapSort(arr);
console.log("arr", arr);
arr2.sort((a, b) => a - b)
console.log("arr2", arr2);
