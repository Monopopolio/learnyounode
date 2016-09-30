var SumaTotal = 0;
for (var i = 2 ; i < process.argv.length; i++) {
	SumaTotal += Number(process.argv[i]);
}
console.log(SumaTotal)
