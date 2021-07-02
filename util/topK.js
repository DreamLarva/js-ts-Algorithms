"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nthElement = void 0;
function nthElement(results, left, kth, right) {
    // 只有一个值的时候
    if (left === right) {
        return;
    }
    const pivot = Math.floor(Math.random() * (right - left) + left);
    // 随意找出一个值 与最右侧的值交换 作为标杆
    swap(results, pivot, right);
    // 三路划分（three-way partition）
    let sepl = left - 1, // 左指针
    sepr = left - 1; // 右指针
    for (let i = left; i <= right; i++) {
        if (results[i] > results[right]) {
            // 如果当前值 大于 标杆
            // 两个指针都向右 移一位
            // 右指针 与 i 交换
            swap(results, ++sepr, i);
            // 左指针 与 右指针交换
            swap(results, ++sepl, sepr);
        }
        else if (results[i] === results[right]) {
            // 与 标杆 相同
            // 则 右指针 向右
            // 与 i 位置交换
            swap(results, ++sepr, i);
        }
    }
    // 一轮结束
    // 结果是 左指针 左侧的都小于 左指针
    if (sepl < left + kth && left + kth <= sepr) {
        return;
    }
    else if (left + kth <= sepl) {
        // 左指针落在 第k大之后, 左侧需要 再进行一轮
        nthElement(results, left, kth, sepl);
    }
    else {
        // 左指针 落在 第k大之前 则右侧 需要再进行一轮
        nthElement(results, sepr + 1, kth - (sepr - left + 1), right);
    }
}
exports.nthElement = nthElement;
const swap = (results, index1, index2) => {
    if (index1 === index2)
        return;
    const temp = results[index1];
    results[index1] = results[index2];
    results[index2] = temp;
};
// const data = [1, 4, 2, 3, 1, 5, 2, 0, 5, 0];
// const k = 3; // 第3大
// nthElement(data, 0, k - 1, data.length - 1);
// console.log(data[k - 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wSy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC90b3BLLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQWdCLFVBQVUsQ0FDeEIsT0FBaUIsRUFDakIsSUFBWSxFQUNaLEdBQVcsRUFDWCxLQUFhO0lBRWIsV0FBVztJQUNYLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtRQUNsQixPQUFPO0tBQ1I7SUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoRSx3QkFBd0I7SUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsNEJBQTRCO0lBQzVCLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTTtJQUN6QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFFekIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsY0FBYztZQUNkLGNBQWM7WUFDZCxhQUFhO1lBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixjQUFjO1lBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxVQUFVO1lBQ1YsV0FBVztZQUNYLFdBQVc7WUFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7SUFDRCxPQUFPO0lBQ1AscUJBQXFCO0lBRXJCLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDM0MsT0FBTztLQUNSO1NBQU0sSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRTtRQUM3QiwwQkFBMEI7UUFDMUIsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3RDO1NBQU07UUFDTCwyQkFBMkI7UUFDM0IsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDL0Q7QUFDSCxDQUFDO0FBNUNELGdDQTRDQztBQUVELE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBaUIsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDakUsSUFBSSxNQUFNLEtBQUssTUFBTTtRQUFFLE9BQU87SUFDOUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUM7QUFFRiwrQ0FBK0M7QUFDL0Msc0JBQXNCO0FBQ3RCLCtDQUErQztBQUMvQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbnRoRWxlbWVudChcbiAgcmVzdWx0czogbnVtYmVyW10sXG4gIGxlZnQ6IG51bWJlcixcbiAga3RoOiBudW1iZXIsXG4gIHJpZ2h0OiBudW1iZXJcbikge1xuICAvLyDlj6rmnInkuIDkuKrlgLznmoTml7blgJlcbiAgaWYgKGxlZnQgPT09IHJpZ2h0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBpdm90ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHJpZ2h0IC0gbGVmdCkgKyBsZWZ0KTtcbiAgLy8g6ZqP5oSP5om+5Ye65LiA5Liq5YC8IOS4juacgOWPs+S+p+eahOWAvOS6pOaNoiDkvZzkuLrmoIfmnYZcbiAgc3dhcChyZXN1bHRzLCBwaXZvdCwgcmlnaHQpO1xuICAvLyDkuInot6/liJLliIbvvIh0aHJlZS13YXkgcGFydGl0aW9u77yJXG4gIGxldCBzZXBsID0gbGVmdCAtIDEsIC8vIOW3puaMh+mSiFxuICAgIHNlcHIgPSBsZWZ0IC0gMTsgLy8g5Y+z5oyH6ZKIXG5cbiAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgIGlmIChyZXN1bHRzW2ldID4gcmVzdWx0c1tyaWdodF0pIHtcbiAgICAgIC8vIOWmguaenOW9k+WJjeWAvCDlpKfkuo4g5qCH5p2GXG4gICAgICAvLyDkuKTkuKrmjIfpkojpg73lkJHlj7Mg56e75LiA5L2NXG4gICAgICAvLyDlj7PmjIfpkogg5LiOIGkg5Lqk5o2iXG4gICAgICBzd2FwKHJlc3VsdHMsICsrc2VwciwgaSk7XG4gICAgICAvLyDlt6bmjIfpkogg5LiOIOWPs+aMh+mSiOS6pOaNolxuICAgICAgc3dhcChyZXN1bHRzLCArK3NlcGwsIHNlcHIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0c1tpXSA9PT0gcmVzdWx0c1tyaWdodF0pIHtcbiAgICAgIC8vIOS4jiDmoIfmnYYg55u45ZCMXG4gICAgICAvLyDliJkg5Y+z5oyH6ZKIIOWQkeWPs1xuICAgICAgLy8g5LiOIGkg5L2N572u5Lqk5o2iXG4gICAgICBzd2FwKHJlc3VsdHMsICsrc2VwciwgaSk7XG4gICAgfVxuICB9XG4gIC8vIOS4gOi9rue7k+adn1xuICAvLyDnu5PmnpzmmK8g5bem5oyH6ZKIIOW3puS+p+eahOmDveWwj+S6jiDlt6bmjIfpkohcblxuICBpZiAoc2VwbCA8IGxlZnQgKyBrdGggJiYgbGVmdCArIGt0aCA8PSBzZXByKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGxlZnQgKyBrdGggPD0gc2VwbCkge1xuICAgIC8vIOW3puaMh+mSiOiQveWcqCDnrKxr5aSn5LmL5ZCOLCDlt6bkvqfpnIDopoEg5YaN6L+b6KGM5LiA6L2uXG4gICAgbnRoRWxlbWVudChyZXN1bHRzLCBsZWZ0LCBrdGgsIHNlcGwpO1xuICB9IGVsc2Uge1xuICAgIC8vIOW3puaMh+mSiCDokL3lnKgg56ysa+Wkp+S5i+WJjSDliJnlj7Pkvqcg6ZyA6KaB5YaN6L+b6KGM5LiA6L2uXG4gICAgbnRoRWxlbWVudChyZXN1bHRzLCBzZXByICsgMSwga3RoIC0gKHNlcHIgLSBsZWZ0ICsgMSksIHJpZ2h0KTtcbiAgfVxufVxuXG5jb25zdCBzd2FwID0gKHJlc3VsdHM6IG51bWJlcltdLCBpbmRleDE6IG51bWJlciwgaW5kZXgyOiBudW1iZXIpID0+IHtcbiAgaWYgKGluZGV4MSA9PT0gaW5kZXgyKSByZXR1cm47XG4gIGNvbnN0IHRlbXAgPSByZXN1bHRzW2luZGV4MV07XG4gIHJlc3VsdHNbaW5kZXgxXSA9IHJlc3VsdHNbaW5kZXgyXTtcbiAgcmVzdWx0c1tpbmRleDJdID0gdGVtcDtcbn07XG5cbi8vIGNvbnN0IGRhdGEgPSBbMSwgNCwgMiwgMywgMSwgNSwgMiwgMCwgNSwgMF07XG4vLyBjb25zdCBrID0gMzsgLy8g56ysM+Wkp1xuLy8gbnRoRWxlbWVudChkYXRhLCAwLCBrIC0gMSwgZGF0YS5sZW5ndGggLSAxKTtcbi8vIGNvbnNvbGUubG9nKGRhdGFbayAtIDFdKTtcbiJdfQ==