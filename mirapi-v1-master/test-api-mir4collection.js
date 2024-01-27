var coso;
fetch('https://www.mir4collection.com:8080/api/player/filter', {
	method: 'POST',
	body: '{"characterName":"","worldName":"","characterIndex":"","level":"","powerScore":"","price":"","physAttack":"","spellAttack":"","physDefense":"","spellDefense":"","codexLength":"","epicSpiritNames":[],"training":[],"inven":[],"legendarySpiritLength":"","legendaryUnsealSpiritLength":"","epicItemLength":"","epicItemLengthTradable":false,"legendaryItemLength":"","legendaryItemLengthTradable":false,"epicSkillTomeLength":"","epicSkillTomeLengthTradable":false,"legendarySkillTomeLength":"","legendarySkillTomeLengthTradable":false,"requiredSkills":[],"requiredItems":[],"requiredEquipItems":[],"spiritNamesUseOr":"false","sort":{"prop":"newest","level":-1},"page":1,"stats":[],"methodIsSoldPlayers":false}',
})
.then((res)=>{
	return res.json();
})
.then((res)=>{
	coso = res;
	console.log('res: ', res);
});