//Breadth First Search (BFS) is a graph traversal algorithm that starts from a source node and explores the graph level by level. 
//First, it visits all nodes directly adjacent to the source. 
//Then, it moves on to visit the adjacent nodes of those nodes, and this process continues until all reachable nodes are visited.



function knightMoves ([a,b],[c,d],callback) {
    //test to see if arguments are numbers 
    if(typeof a !== 'number' || typeof b !== 'number'  || typeof c !== 'number' || typeof d !== 'number') {
        throw new TypeError ("not a number")
    }
    let startVertex = [a,b]
    if(startVertex === null) return 
    if(callback && typeof callback === "function" ) {
        let q = []; 
        q.push(startVertex)
        while (q.length!==0) {
            let current = q.shift();
            callback(current)
           

            //generate new locations 

            if (current[0] >= 0 && current[0] <= 7 && current[1] >= 0 && current[1] <= 7) {
                q.push([current[0] + 2, current[1] + 1])
            }
            
            
            // if(current.right !==null) {
            //     q.push(current.right)
            // }
            
        }

    }else {
        throw new Error ("Need a callback")
    }
}


knightMoves([0,0],[2,2],([a,b]) => console.log([a,b]))
