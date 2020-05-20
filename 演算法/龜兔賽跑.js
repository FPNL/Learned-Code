// 俗稱： Floyd's tortoise and hare.

function findDuplicate(nums) {
  let turtle = nums[0];
  let hare = nums[0];

  while (true) {
    turtle = nums[turtle];
    hare = nums[nums[hare]];

    if(turtle == hare) {
        break;
    }
  }


  let ptr1 = nums[0];
  let ptr2 = turtle;

  while(ptr1 !== ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
}

let nums = [1, 4, 3, 5, 6 , 1, 2];
findDuplicate(nums) // 1
