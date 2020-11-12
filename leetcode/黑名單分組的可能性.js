/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
  const graph = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

  for (let d of dislikes) {
    graph[d[0] - 1][d[1] - 1] = 1;
    graph[d[1] - 1][d[0] - 1] = 1;
  }

  const group = Array(N);
  for (let i = 0; i < N; i++) {
    if (group[i] === undefined && !dfs(graph, group, i, 1)) {
      return false;
    }
  }
  return true;
};

function dfs(graph, group, index, g) {
  group[index] = g;
  for (let i = 0; i < graph.length; i++) {
    if (graph[index][i] === 1) {
      if (group[i] === g) {
        return false;
      }
      if (group[i] == undefined && !dfs(graph, group, i, -g)) {
        return false;
      }
    }
  }
  return true;
}
