export const useCalculateProbabilities = (
	numbers: number[]
): {
	red: number;
	black: number;
	even: number;
	odd: number;
	range1to18: number;
	range19to36: number;
} => {
	const result = {
		red: 0,
		black: 0,
		even: 0,
		odd: 0,
		range1to18: 0,
		range19to36: 0,
	};

	let lastColor: string | null = null;
	let lastParity: string | null = null;
	let lastRange: string | null = null;

	const probabilities = {
		red: 51.75,
		black: 51.75,
		even: 51.75,
		odd: 51.75,
		range1to18: 51.75,
		range19to36: 51.75,
	};

	const adjustValue = (value: number) =>
		Math.min(Math.round(value * 100) / 100, 97.75);

	const resetProbabilities = () => {
		probabilities.red = 51.75;
		probabilities.black = 51.75;
		probabilities.even = 51.75;
		probabilities.odd = 51.75;
		probabilities.range1to18 = 51.75;
		probabilities.range19to36 = 51.75;
	};

	// eslint-disable-next-line sonarjs/cognitive-complexity
	numbers.forEach(number => {
		const isRed = [
			1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
		].includes(number);
		const isBlack = !isRed && number !== 0;
		const isEven = number % 2 === 0;

		if (isRed) {
			result.red += 1;
			if (lastColor === "red") {
				probabilities.red += 6.543;
			} else {
				if (lastColor !== null) resetProbabilities();
				probabilities.red += 12.324;
			}
			lastColor = "red";
		} else if (isBlack) {
			result.black += 1;
			if (lastColor === "black") {
				probabilities.black += 6.543;
			} else {
				if (lastColor !== null) resetProbabilities();
				probabilities.black += 12.324;
			}
			lastColor = "black";
		} else {
			resetProbabilities();
		}

		if (isEven) {
			result.even += 1;
			if (lastParity === "even") {
				probabilities.even += 6.543;
			} else {
				if (lastParity !== null) resetProbabilities();
				probabilities.even += 12.324;
			}
			lastParity = "even";
		} else {
			result.odd += 1;
			if (lastParity === "odd") {
				probabilities.odd += 6.543;
			} else {
				if (lastParity !== null) resetProbabilities();
				probabilities.odd += 12.324;
			}
			lastParity = "odd";
		}

		if (number >= 1 && number <= 18) {
			result.range1to18 += 1;
			if (lastRange === "range1to18") {
				probabilities.range1to18 += 6.543;
			} else {
				if (lastRange !== null) resetProbabilities();
				probabilities.range1to18 += 12.324;
			}
			lastRange = "range1to18";
		} else if (number >= 19 && number <= 36) {
			result.range19to36 += 1;
			if (lastRange === "range19to36") {
				probabilities.range19to36 += 6.543;
			} else {
				if (lastRange !== null) resetProbabilities();
				probabilities.range19to36 += 12.324;
			}
			lastRange = "range19to36";
		}
	});

	return {
		red: adjustValue(probabilities.red),
		black: adjustValue(probabilities.black),
		even: adjustValue(probabilities.even),
		odd: adjustValue(probabilities.odd),
		range1to18: adjustValue(probabilities.range1to18),
		range19to36: adjustValue(probabilities.range19to36),
	};
};
