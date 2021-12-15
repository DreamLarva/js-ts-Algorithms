/*
630. 课程表 III
这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，其中 courses[i] = [durationi, lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。

你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。

返回你最多可以修读的课程数目。



示例 1：

输入：courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
输出：3
解释：
这里一共有 4 门课程，但是你最多可以修 3 门：
首先，修第 1 门课，耗费 100 天，在第 100 天完成，在第 101 天开始下门课。
第二，修第 3 门课，耗费 1000 天，在第 1100 天完成，在第 1101 天开始下门课程。
第三，修第 2 门课，耗时 200 天，在第 1300 天完成。
第 4 门课现在不能修，因为将会在第 3300 天完成它，这已经超出了关闭日期
示例 2：
输入：courses = [[1,2]]
输出：1

示例 3：
输入：courses = [[3,2],[4,3]]
输出：0


提示:

1 <= courses.length <= 10^4
1 <= duration_i, lastDay_i <= 10^4

* */

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { PriorityQueueItem } from "@datastructures-js/priority-queue/src/priorityQueue";

function scheduleCourse(courses: number[][]): number {
  // 按照 结束时间 从早到晚排序
  courses.sort((a, b) => a[1] - b[1]);
  // https://leetcode-cn.com/problems/course-schedule-iii/solution/ke-cheng-biao-iii-by-leetcode-solution-yoyz/
  let sumDuration = 0;
  let result = 0;
  const maxPQ = new MaxPriorityQueue<number>();
  for (let i = 0; i < courses.length; i++) {
    const [duration, lastDay] = courses[i];
    // 可以塞下 这门课程， 则增加课程
    if (lastDay >= sumDuration + duration) {
      maxPQ.enqueue(duration);
      sumDuration += duration;
      result++;
      continue;
    }

    // 不能塞下当前课程， 但是可以优化课程总时长， 利于塞下更多的课程
    if (
      ((maxPQ.front() as PriorityQueueItem<number>)?.element ?? 0) >= duration
    ) {
      // 如果持续时间 小于 已有课程中最大的， 那么替换掉
      sumDuration -= (maxPQ.dequeue() as PriorityQueueItem<number>).element;
      maxPQ.enqueue(duration);
      sumDuration += duration;
    }
  }

  return result;
}

import assert from "assert";

assert.strictEqual(
  scheduleCourse([
    [100, 200],
    [200, 1300],
    [1000, 1250],
    [2000, 3200],
  ]),
  3
);
assert.strictEqual(scheduleCourse([[1, 2]]), 1);
assert.strictEqual(
  scheduleCourse([
    [3, 2],
    [4, 3],
  ]),
  0
);

assert.strictEqual(
  scheduleCourse([
    [5, 5],
    [4, 6],
    [2, 6],
  ]),
  2
);
