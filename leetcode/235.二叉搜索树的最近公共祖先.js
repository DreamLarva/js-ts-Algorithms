"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /**
   * 二叉搜索树
   * 右子节点一定大于 当前节点
   * 左子节点一定小于 当前节点
   * */
  // 由于题目没有明确p 和 q 哪个更大
  // 确定 是否在两个值之间 或者在某个值上
  if ((root.val - p.val) * (root.val - q.val) <= 0) {
    return root;
  }
  // 都小于 或者 都大于
  if (root.val - p.val < 0) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return lowestCommonAncestor(root.left, p, q);
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM1LuS6jOWPieaQnOe0ouagkeeahOacgOi/keWFrOWFseelluWFiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjM1LuS6jOWPieaQnOe0ouagkeeahOacgOi/keWFrOWFseelluWFiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQThCQTs7Ozs7R0FLRztBQUNILElBQUksb0JBQW9CLEdBQUcsVUFDekIsSUFBYyxFQUNkLENBQVcsRUFDWCxDQUFXO0lBRVg7Ozs7U0FJSztJQUNMLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxhQUFhO0lBQ2IsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7U0FBTTtRQUNMLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0M7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM5Y+J5pCc57Si5qCRLCDmib7liLDor6XmoJHkuK3kuKTkuKrmjIflrproioLngrnnmoTmnIDov5HlhazlhbHnpZblhYjjgIJcblxu55m+5bqm55m+56eR5Lit5pyA6L+R5YWs5YWx56WW5YWI55qE5a6a5LmJ5Li677ya4oCc5a+55LqO5pyJ5qC55qCRIFQg55qE5Lik5Liq57uT54K5IHDjgIFx77yM5pyA6L+R5YWs5YWx56WW5YWI6KGo56S65Li65LiA5Liq57uT54K5IHjvvIzmu6HotrMgeCDmmK8gcOOAgXEg55qE56WW5YWI5LiUIHgg55qE5rex5bqm5bC95Y+v6IO95aSn77yI5LiA5Liq6IqC54K55Lmf5Y+v5Lul5piv5a6D6Ieq5bex55qE56WW5YWI77yJ44CC4oCdXG5cbuS+i+Wmgu+8jOe7meWumuWmguS4i+S6jOWPieaQnOe0ouagkTogIHJvb3QgPSBbNiwyLDgsMCw0LDcsOSxudWxsLG51bGwsMyw1XVxuXG5cblxuXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IHJvb3QgPSBbNiwyLDgsMCw0LDcsOSxudWxsLG51bGwsMyw1XSwgcCA9IDIsIHEgPSA4XG7ovpPlh7o6IDZcbuino+mHijog6IqC54K5IDIg5ZKM6IqC54K5IDgg55qE5pyA6L+R5YWs5YWx56WW5YWI5pivIDbjgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6IHJvb3QgPSBbNiwyLDgsMCw0LDcsOSxudWxsLG51bGwsMyw1XSwgcCA9IDIsIHEgPSA0XG7ovpPlh7o6IDJcbuino+mHijog6IqC54K5IDIg5ZKM6IqC54K5IDQg55qE5pyA6L+R5YWs5YWx56WW5YWI5pivIDIsIOWboOS4uuagueaNruWumuS5ieacgOi/keWFrOWFseelluWFiOiKgueCueWPr+S7peS4uuiKgueCueacrOi6q+OAglxuXG5cbuivtOaYjjpcblxu5omA5pyJ6IqC54K555qE5YC86YO95piv5ZSv5LiA55qE44CCXG5w44CBcSDkuLrkuI3lkIzoioLngrnkuJTlnYflrZjlnKjkuo7nu5nlrprnmoTkuozlj4nmkJzntKLmoJHkuK3jgIJcbiogKi9cbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuXG4vKipcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHBcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHFcbiAqIEByZXR1cm4ge1RyZWVOb2RlfVxuICovXG52YXIgbG93ZXN0Q29tbW9uQW5jZXN0b3IgPSBmdW5jdGlvbiAoXG4gIHJvb3Q6IFRyZWVOb2RlLFxuICBwOiBUcmVlTm9kZSxcbiAgcTogVHJlZU5vZGVcbik6IFRyZWVOb2RlIHtcbiAgLyoqXG4gICAqIOS6jOWPieaQnOe0ouagkVxuICAgKiDlj7PlrZDoioLngrnkuIDlrprlpKfkuo4g5b2T5YmN6IqC54K5XG4gICAqIOW3puWtkOiKgueCueS4gOWumuWwj+S6jiDlvZPliY3oioLngrlcbiAgICogKi9cbiAgLy8g55Sx5LqO6aKY55uu5rKh5pyJ5piO56GucCDlkowgcSDlk6rkuKrmm7TlpKdcbiAgLy8g56Gu5a6aIOaYr+WQpuWcqOS4pOS4quWAvOS5i+mXtCDmiJbogIXlnKjmn5DkuKrlgLzkuIpcbiAgaWYgKChyb290LnZhbCAtIHAudmFsKSAqIChyb290LnZhbCAtIHEudmFsKSA8PSAwKSB7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cbiAgLy8g6YO95bCP5LqOIOaIluiAhSDpg73lpKfkuo5cbiAgaWYgKHJvb3QudmFsIC0gcC52YWwgPCAwKSB7XG4gICAgcmV0dXJuIGxvd2VzdENvbW1vbkFuY2VzdG9yKHJvb3QucmlnaHQhLCBwLCBxKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG93ZXN0Q29tbW9uQW5jZXN0b3Iocm9vdC5sZWZ0ISwgcCwgcSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==
