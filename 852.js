// 我们把符合下列属性的数组 A 称作山脉：

// A.length >= 3
// 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。

 

// 示例 1：

// 输入：[0,1,0]
// 输出：1
// 示例 2：

// 输入：[0,2,1,0]
// 输出：1
 

// 提示：

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A 是如上定义的山脉

var peakIndexInMountainArray = function(A) {
    for(let [index,item] of A.entries()){
        if(index === 0 && A[index]>A[index+1]){
            return index;
        }else if(index === A.length-1 && A[index]>A[index-1]){
            return index;
        }else if(A[index]>A[index-1] && A[index]>A[index+1]){
            return index;
        }
    }
};


console.log(peakIndexInMountainArray([0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))