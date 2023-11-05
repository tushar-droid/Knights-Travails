const knightMoves = (start, end) =>{
    const st = new Set();
    const qu = [];
    var current_move = start;
    const graph = {};
    qu.push(current_move);
    while(qu.length > 0){
        current_move = qu.shift()
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
    console.log(graph);


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



// const searchPath =(start, end) =>{ 
//     var end_val = `[${end}]`;
//     var moves = new Set(PossibleMoves(start));
//     console.log(moves.has(end_val));
// }



knightMoves([1,1],[3,0])