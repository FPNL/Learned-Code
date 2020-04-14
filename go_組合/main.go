// 排列組合中的組合
// 在組合數學，一個集的元素的組合（英語： Combination ）是一個子集。
// S 的一個 k- 組合是 S 的一個有 k 個元素的子集。
// 若兩個子集的元素完全相同並順序相異，它仍視為同一個組合，這是組合和排列不同之處。

// C 3 取 2

func C(total int, part int) int {
	a := Factorial(total)
	b := Factorial(part)
	c := Factorial(total - part)

	return a / (b * c)
}

func Factorial(value int) (newInt int) {
	newInt = 1
	for ; value > 1; value-- {
		newInt = value * newInt
	}
	return
}
