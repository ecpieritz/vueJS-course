export default{
    computed:{
		quoteWithUnderline(){
			return this.quote.replace(/\s/g, '_')
		},
		quoteWithLength(){
			return this.quote.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}