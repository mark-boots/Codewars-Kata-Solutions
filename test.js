function buildInvertedIndex(collection, term, caseSensitive, exactMatch) {
    
    const reg = new RegExp(`${exactMatch? '\\b'+term+'\\b' : term}`,`${caseSensitive?'' : 'i'}`)

    console.log('index directly')
    console.log([1,collection[1], reg.test(collection[1]),reg])

    console.log('loop')
    collection.forEach((val,i) => {
        console.log([i,val, reg.test(val),reg])
    });
  
  }

  console.log(buildInvertedIndex(['Lorem Ipsum Dolor', 'Hodor Dolor Hodor', 'Dolormiten are not a thing'],'Dolor', true, false))