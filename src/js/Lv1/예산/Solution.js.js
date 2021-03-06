function solution(d, budget) {
    let answer = 0;
    d = d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        if (d[i] <= budget) {
            answer += 1;
            budget -= d[i];
        }
    }
    return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9))
console.log(solution([2, 2, 3, 3], 10))