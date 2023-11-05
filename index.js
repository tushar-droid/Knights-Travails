const knightMoves = (start, end) =>{
    const graph = CreateGraph(start);
    const queue = [[start, 0]];
    const visited = new Set();
    const parent = new Map();
    
    while(queue.length > 0){
        var [current, distance] = queue.shift();
        if(String(current) === String(end)){
            var path = getPath(start,end, parent);
            return path;}
        for(let neigbor of graph[current]){
            if(!visited.has(String(neigbor))){
                visited.add(String(neigbor));
                parent.set(String(neigbor), String(current))
                queue.push( [neigbor, distance+1] );
            }
        }
    }
    return -1;
}

getPath = (startNode, endNode, parent) => {
    const path = [[String(endNode)]];
    let current = endNode;
    while (String(current) !== String(startNode)) {
      current = parent.get(String(current));
      path.unshift([current]);
    }
    return path;
  }




const CreateGraph = (start) =>{
    const st = new Set();
    const qu = [];
    var current_move = start;
    const graph = {};
    qu.push(current_move);
    while(qu.length > 0){
        current_move = qu.shift();
        if(st.has(String(current_move))){
            continue;
        }
        st.add(String(current_move));

        var moves = PossibleMoves(current_move);
        moves.forEach( move => {
            if(!(current_move in graph)) graph[current_move] = []
            if(!(move in graph)) graph[move] = []
            graph[current_move].push(move);
            graph[move].push(current_move);
            qu.push(move);
        });
    }
    return graph
}




const PossibleMoves = (node) =>{
    let arr = [];
    var [x_val, y_val] = node;    
    const x_move = [1,1,2,2,-1,-1,-2,-2];
    const y_move = [2,-2,1,-1,2,-2,1,-1];
    for(var i = 0; i<x_move.length; i++){
        x_new_move = x_val + x_move[i];
        y_new_move = y_val + y_move[i];
        if( (0<=x_new_move && x_new_move < 8) && (0<=y_new_move && y_new_move < 8) ) arr.push([x_new_move,y_new_move]);
    }
    return arr;
}


const dist = knightMoves([0,0],[5,7])
console.log('Distance fofrom that node to thjis node is: ', dist)