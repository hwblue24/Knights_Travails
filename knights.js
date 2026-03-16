//Breadth First Search (BFS) is a graph traversal algorithm that starts from a source node and explores the graph level by level. 
//First, it visits all nodes directly adjacent to the source. 
//Then, it moves on to visit the adjacent nodes of those nodes, and this process continues until all reachable nodes are visited.



function knightMoves ([a,b],[c,d],callback) {
    //test to see if arguments are numbers 
    if(typeof a !== 'number' || typeof b !== 'number'  || typeof c !== 'number' || typeof d !== 'number') {
        throw new TypeError ("not a number")
    }
    let startVertex = [a,b];
    let endVertex = [c,d];    
    if(startVertex === null) return 
    if(callback && typeof callback === "function" ) {
        let q = []; 
        q.push(startVertex)
        while (q.length!==0) {
            let current = q.shift();
            callback(current)

            //generate all 8 next spots and push into an array
            let possibleVertices = []; 
            possibleVertices.push([current[0] + 2, current[1] + 1])
            possibleVertices.push([current[0] + 2, current[1] - 1])
            possibleVertices.push([current[0] + 1, current[1] + 2])
            possibleVertices.push([current[0] + 1, current[1] - 2])
            possibleVertices.push([current[0] - 2, current[1] + 1])
            possibleVertices.push([current[0] - 2, current[1] - 1])
            possibleVertices.push([current[0] - 1, current[1] + 2])
            possibleVertices.push([current[0] - 1, current[1] - 2])
            
            
            //filter out impossible board spots iterate through array
            for(const vertex of possibleVertices) {
                if(vertex[0] === endVertex[0] && vertex[1] === endVertex[1]) {
                    return 
                }else if (vertex[0] >= 0 && vertex[0] <= 7 && vertex[1] >= 0 && vertex[1] <= 7) {
                   q.push(vertex)
                } 
            }
            
        }

    }else {
        throw new Error ("Need a callback")
    }
}


knightMoves([3,3],[6,0],([a,b]) => console.log([a,b]))
