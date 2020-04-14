// 有點複雜，需在探討
// 大致上是
// Input [1, 2, 3, 4, 5]
// Output { year1: 1, year2: 2, year3: 3, year4: 4, year5: 5 }
// key 名稱可以自由決定

function sortBy(arr, condition) {
  return [...arr].sort(condition);
}
/**
 * @param {Array} arrData
 * @param {Function} callbackFn - key 的命名 return string
 * @returns {object} 其 key 由 callbackFn 回傳的字串決定
 */
function filterByCondition(arrData, callbackFn) {
  const returnData = {};
  arrData.map(item => {
    const conditionByOutside = callbackFn(item);
    let hadData = Array.isArray(returnData[conditionByOutside]);
    if (hadData) {
      returnData[conditionByOutside] = [...returnData[conditionByOutside], item];
    } else {
      returnData[conditionByOutside] = [item];
    }
  });
  return returnData;
}

/**
 * @export
 * @param {object} targetData - state
 * @returns function
 */
function transformToObject(targetData) {
  return (sortFn, filterFn) => {
    targetData = sortBy(targetData, (a, b) => {
      return sortFn(b) - sortFn(a);
    });
    const filterData = filterByCondition(targetData, eachData => {
      return filterFn(eachData);
    });
    return filterData;
  };
}

// vuex
export function depositRecordByStatus(state) {
  let targetData = state.depositRecords;
  const conditionA = "status";
  return transformToObject(targetData)(
    sortCondition => {
      return sortCondition[conditionA];
    },
    eachData => {
      return eachData[conditionA];
    }
  );
}

// vue 示範
export default {
  computed : {
      ...mapGetters("wallet", ["$_depositRecords"]),
      example() {
        return this.$_depositRecords(
          sortCondition => {
            return sortCondition.time.apply; // 代表使用 state.depositRecords 各個資料的 time.apply 排序
          },
          filterCondition => {
            filterCondition = new Date(filterCondition.time.apply);
            let year = filterCondition.getFullYear();
            let month = filterCondition.getMonth();
            let objectKey = `${year}-${`${month}`.padStart(2, "0")}`;
            return objectKey; // 回傳會變成 物件 且 key 由此決定
          }
        );
      }
    }
}
