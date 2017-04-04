using System;
using System.Collections.Generic;
using System.Linq;

namespace Arrays{

    public class ArraySolutions{
        // Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
        // Example 1:               Example 2:
        // nums1 = [1, 3]           nums1 = [1, 2]
        // nums2 = [2]              nums2 = [3, 4]

        // The median is 2.0        The median is (2 + 3)/2 = 2.5
        public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
            var list1 = nums1.ToList();
            var list2 = nums2.ToList();

            if(list1.Count == 0 && list2.Count == 0) return 0.0;
            
            if(list1.Count < list2.Count){
                var temp = list1;
                list1 = list2;
                list2 = temp;
            }

            if(list2.Count == 0){
                var stop1 = list1.Count % 2 == 0 ? 2 : 1;
                while(list1.Count > stop1){
                    list1.RemoveAt(0);
                    list1.RemoveAt(list1.Count-1);
                }

                if(stop1 == 2){
                    return (list1[0] + list1[1]) / 2.0;
                }
                return list1[0];
            }

            // var stop = (list1.Count + list2.Count) % 2 == 0 ? 2 : 1;
            // while(list1.Count + list2.Count > stop){
            //     if(list2.Count == 0){
            //         list1.RemoveAt(0);
            //         list1.RemoveAt(list1.Count-1);
            //     }else if(list1.Count == 0){
            //         list2.RemoveAt(0);
            //         list2.RemoveAt(list2.Count-1);
            //     }else{
            //         if(list1[0] < list2[0]){
            //             list1.RemoveAt(0);
            //         }else{
            //             list2.RemoveAt(0);
            //         }

            //         if(list1[list1.Count-1] > list2[list2.Count-1]){
            //             list1.RemoveAt(list1.Count-1);
            //         }else{
            //             list2.RemoveAt(list2.Count-1);
            //         }
            //     }
            // }

            var grabMin = true;
            var stop = (list1.Count + list2.Count) % 2 == 0 ? 2 : 1;
            while(list1.Count + list2.Count > stop){
                if(list2.Count == 0){
                    if(grabMin){
                        list1.RemoveAt(0);
                    }else{
                        list1.RemoveAt(list1.Count-1);
                    }
                }else if(list1.Count == 0){
                    if(grabMin){
                        list2.RemoveAt(0);
                    }else{
                        list2.RemoveAt(list2.Count-1);
                    }
                }else if(grabMin){
                    if(list1[0] < list2[0]){
                        list1.RemoveAt(0);
                    }else{
                        list2.RemoveAt(0);
                    }
                }else{
                    if(list1[list1.Count-1] > list2[list2.Count-1]){
                        list1.RemoveAt(list1.Count-1);
                    }else{
                        list2.RemoveAt(list2.Count-1);
                    }
                }
                grabMin = grabMin ? false : true;
            }

            if(list1.Count < list2.Count){
                var temp = list1;
                list1 = list2;
                list2 = temp;
            }

            if(list2.Count == 0){
                if(list1.Count == 1){
                    return list1[0];
                }
                return (list1[0] + list1[1]) / 2.0;
            }

            return (list1[0] + list2[0]) / 2.0;
        }


        // return the kth larget number in a sequence
        // k is between 1 and the length
        public int FindKthLargest(int[] nums, int k) {
            var list = nums.ToList();
            list.Sort();
            return list[list.Count - k];
        }


        // Given a collection of intervals, merge all overlapping intervals.
        // For example,
        // Given [1,3],[2,6],[8,10],[15,18],
        // return [1,6],[8,10],[15,18].
        public class Interval {
            public int start;
            public int end;
            public Interval() { start = 0; end = 0; }
            public Interval(int s, int e) { start = s; end = e; }
        }
        //TODO: INCOMPLETE -> Finish it
        public IList<Interval> Merge(IList<Interval> intervals) {
            var list = new List<Interval>();
            if(intervals.Count > 0){
                list.Add(intervals[0]);
                for(var i = 1; i < intervals.Count; i++){
                    var add = true;
                    for(var j = 0; j < list.Count; j++){
                        if((intervals[i].start >= list[j].start && intervals[i].start <= list[j].end) || 
                            (intervals[i].end <= list[j].end && intervals[i].end >= list[j].start) || 
                            (list[j].start >= intervals[i].start && list[j].start <= intervals[i].end) ||
                            (list[j].end <= intervals[i].end && list[j].end >= intervals[i].start)){

                            list[j].end = Math.Max(intervals[i].end, list[j].end);
                            list[j].start = Math.Min(intervals[i].start, list[j].start);
                            add = false;
                        }
                        if(j>0){
                            if((list[j].start >= list[j-1].start && list[j].start <= list[j-1].end) || (list[j].end <= list[j-1].end && list[j].end >= list[j-1].start)){
                                list[j-1].start = Math.Min(list[j-1].start, list[j].start);
                                list[j-1].end = Math.Max(list[j-1].end, list[j].end);
                                list.RemoveAt(j);
                                j--;
                            }
                        }
                    }
                    if(add){
                        list.Add(intervals[i]);
                    }
                }
            }
            return list;
        }
    }
}

