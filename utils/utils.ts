const wordCapitalize = (word: string): string => {
	return word[0].toUpperCase() + word.substring(1);
};

const dreamWorldImgUrl = (id: number): string => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};

const exportedFunctions = { wordCapitalize, dreamWorldImgUrl };

export default exportedFunctions;
