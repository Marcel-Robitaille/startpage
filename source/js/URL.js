const topLevelDomains = 'ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw'

// I know there's more but I don't really give a fuck
const invalidURLChars = ' '
const urlRegex = new RegExp(`^([^${invalidURLChars}]+\\.(${topLevelDomains})|(\\d{1,3}\\.){3}\\d{1,3})[^ ]*$`, 'i')
const localhostRegex = /^(https?:\/\/|)localhost/i
const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/

class URL {
  constructor(url) {
    if (!/https?:\/\//.test(url)) url = 'http://' + url
    this.url = url
  }

  isValid() {
    return localhostRegex.test(this.url) || ipRegex.test(this.url) || urlRegex.test(this.url)
  }

  render() {
    return `
      <div class='search__result-wrapper'>
        <svg class='search__result__svg'><use xlink:href='#link' /></svg>
        <a class='dropdown__li__a' href='${this.url}'>
          ${this.url}
        </a>
      </div>
    `
  }
}

export default URL
