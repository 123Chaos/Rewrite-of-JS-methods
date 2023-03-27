function islandCount(arr)
{
    if (!arr || arr.length === 0)
    {
        return;
    };
    let N = arr.length, M = arr[0].length, res = 0;
    for (let i = 0; i < N; i++)
    {
        for (let j = 0; j < M; j++)
        {
            if (arr[i][j] === 1)
            {
                ++res;
                infect(arr, i, j, N, M);
            }
        }
    }
    return res;
}
function infect(arr, i, j, N, M)
{
    if (i < 0 || j < 0 || i >= N || j >= M || arr[i][j] !== 1)
    {
        return;
    };
    arr[i][j] = 2;
    infect(arr, i, j - 1, N, M);
    infect(arr, i + 1, j, N, M);
    infect(arr, i, j + 1, N, M);
    infect(arr, i - 1, j, N, M);
}
let arrIsland = [
    [ 0, 0, 1, 0, 1, 0 ],
    [ 1, 1, 1, 0, 1, 0 ],
    [ 1, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1 ]
];
console.log(islandCount(arrIsland)); // 4