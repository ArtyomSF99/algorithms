function dextra(graph, startVertex) {
    let visited = {};
    let distances = {}; // кратчайшие пути из стартовой вершины
    let previous = {}; // предыдущие вершины
      
    let vertices = Object.keys(graph); // список вершин графа
    
    // по умолчанию все расстояния неизвестны (бесконечны)
    vertices.forEach(vertex => {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    });
  
    // расстояние до стартовой вершины равно 0
    distances[startVertex] = 0;
  
    function handleVertex(vertex) {
      // расстояние до вершины
      let activeVertexDistance = distances[vertex]; 
      
      // смежные вершины (с расстоянием до них)
      let neighbours = graph[activeVertex];
      
      // для всех смежных вершин пересчитать расстояния
      Object.keys(neighbours).forEach(neighbourVertex => {
        // известное на данный момент расстояние
        let currentNeighbourDistance = distances[neighbourVertex];
        // вычисленное расстояние
        let newNeighbourDistance = activeVertexDistance + neighbours[neighbourVertex];
        
        if (newNeighbourDistance < currentNeighbourDistance) {
          distances[neighbourVertex] = newNeighbourDistance;
          previous[neighbourVertex] = vertex;
        }
      });
      
      // пометить вершину как посещенную
      visited[vertex] = 1;
    }
    
    // ищем самую близкую вершину из необработанных
    let activeVertex = findNearestVertex(distances, visited);
  
    // продолжаем цикл, пока остаются необработанные вершины 
    while(activeVertex) {
      handleVertex(activeVertex);
      activeVertex = findNearestVertex(distances, visited);
    }
    
    return { distances, previous };
  }