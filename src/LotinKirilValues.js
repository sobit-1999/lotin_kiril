import React, { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function LotinKirilValues() {

  const [lotinValue, setLotinValue] = useState('')
  const [kirilValue, setKirilValue] = useState('')
  const [show, setShow] = useState(true)
  const buttonLotinKiril = show?'Kiril':'Lotin'
  const buttonKirilLotin = show?'Lotin':'Kiril'

const Lotin = [
    'A', 'B', 'V', 'G', 'D', 
    'E', 'YO', 'J', 'Z', 'I', 
    'Y', 'K', 'L', 'M', 'N', 
    'O', 'P', 'R', 'S', 'T', 	
    'U', 'F', 'X', 'H', 'CH', 
    'SH', 'YU', 'YA', 'O`',
    'Q', `G'`, ' ', ',', '.',
    '?','!', '/', '@','#','$',
     '%', '^', '&','*','(',
     ')','_','+','-','+','|',
     '1','2','3','4','5','6',
     '7','8','9','0',':', '"',
     ';',`'`    
  ]

  const Kiril = [
    'А', 'Б', 'В', 'Г', 'Д',
    'Е', 'Ё', 'Ж', 'З', 'И',
    'Й', 'К', 'Л', 'М', 'Н', 
    'О', 'П', 'Р', 'С', 'Т',
    'У', 'Ф', 'Х', 'Ҳ', 'Ч',
    'Ш', 'Ю', 'Я', 'Ў', 
    'Қ', 'Ғ', ' ', ',', '.',
    '?','!', '/', '@','#','$',
     '%', '^', '&','*','(',
     ')','_','+','-','+','|',
     '1','2','3','4','5','6',
     '7','8','9','0',':', '"',
     ';',`'`
  ]
  const arr=[]
  const arr2=[]
  for (let i = 0; i < lotinValue.length; i++) {
   
    for (let j = 0; j < Lotin.length; j++) {
    
      if (lotinValue[i]===Lotin[j]) {
        arr.push(Kiril[j])
      }
      if (j<31&&lotinValue[i]===Lotin[j].toLocaleLowerCase()) {
        arr.push(Kiril[j].toLocaleLowerCase())
      }
      const shch=arr.filter(x => x==='ш'||x==='ч'||x==='ў'||x==='я'||x==='ю'||x==='ё'||x==='Ш'||x==='Ч'||x==='Ў'||x==='Я'||x==='Ю'||x==='Ё'||x==='Ғ'||x==='Ғ'.toLocaleLowerCase())
      
          if  (lotinValue[i]==='H'&&lotinValue[i-1]==='S') { 
            arr.splice(i-shch.length, 2, 'Ш')
          }
          if  (lotinValue[i]==='H'&&lotinValue[i-1]==='C') { 
          arr.splice( i-shch.length, 2, 'Ч')
          }
          if  (lotinValue[i]===`'`&&lotinValue[i-1]==='O') { 
            arr.splice( i-shch.length, 2, 'Ў')
          }
          if  (lotinValue[i]==='A'&&lotinValue[i-1]==='Y') { 
            arr.splice( i-shch.length, 2, 'Я')
          }
          if  (lotinValue[i]==='U'&&lotinValue[i-1]==='Y') { 
            arr.splice( i-shch.length, 2, 'Ю')
          }
          if  (lotinValue[i]==='O'&&lotinValue[i-1]==='Y') { 
            arr.splice( i-shch.length, 2, 'Ё')
          }
          if  (lotinValue[i]===`'`&&lotinValue[i-1]==='G') { 
            arr.splice( i-shch.length, 2, 'Ғ')
          }
          if  (lotinValue[i]==='h'&&lotinValue[i-1]==='s') { 
            arr.splice( i-shch.length, 2, 'ш')
          }

          if  (lotinValue[i]==='h'&&lotinValue[i-1]==='c') { 
          arr.splice( i-shch.length, 2, 'ч')
          }
          if  (lotinValue[i]===`'`&&lotinValue[i-1]==='o') { 
            arr.splice( i-shch.length, 2, 'ў')
          }
          if  (lotinValue[i]==='a'&&lotinValue[i-1]==='y') { 
            arr.splice( i-shch.length, 2, 'я')
          }
          if  (lotinValue[i]==='u'&&lotinValue[i-1]==='y') { 
            arr.splice( i-shch.length, 2, 'ю')
          }
          if  (lotinValue[i]==='o'&&lotinValue[i-1]==='y') { 
            arr.splice( i-shch.length, 2, 'ё')
          }
          if  (lotinValue[i]===`'`&&lotinValue[i-1]==='g') { 
            arr.splice( i-shch.length, 2, 'Ғ'.toLocaleLowerCase())
          }

          // console.log(shch.length);
          console.log(arr);
          // console.log(lotinValue.length);
        }
      }

      for (let i = 0; i < kirilValue.length; i++) {

        if (kirilValue[i]==='Ц') {
          arr2.push('S')
        }
        if (kirilValue[i]==='Ц'.toLocaleLowerCase()) {
          arr2.push('s')
        }
        for (let j = 0; j < Kiril.length; j++) {
          if (kirilValue[i]===Kiril[j].toLocaleLowerCase()) {
            arr2.push(Lotin[j].toLocaleLowerCase())
          }
          
          if (kirilValue[i]===Kiril[j]) {
            arr2.push(Lotin[j])
          }
        }

      }
  
  return (<div className='container'>
      <button className='button' onClick={()=>setShow(!show)}>{buttonLotinKiril}</button> <span>dan <span className='lotin-kiril-font'>{buttonKirilLotin}</span></span>
    <div>
      {show?<> 
      <button className='delete'
      onClick={() => setLotinValue('')}>x</button>
      <TextareaAutosize
        value={lotinValue}
        label="lotin"
        onChange={(e) => setLotinValue(e.target.value)}
        aria-label="empty textarea"
        placeholder='Lotin'
        style={{
            minWidth: '45%',
            minHeight: 500, 
            borderRadius:10,
            padding:10,
            fontSize:20
           }}
    />
    </>:<>
      <button className='delete'
      onClick={() => setKirilValue('')}>x</button>
    <TextareaAutosize
    value={kirilValue}
    onChange={(e) => setKirilValue(e.target.value)}
    aria-label="empty textarea"
    placeholder='Kiril'
    style={{
        minWidth: '45%',
        minHeight: 500, 
        borderRadius: 10,
        padding:10,
        fontSize:20 
        }}
        />   
        </> }
            <TextareaAutosize
            sx={{
            }}
            value={show?arr.join(""):arr2.join('')}
            aria-label="empty textarea"
            placeholder={'NATIJA '+buttonLotinKiril}
            style={{ 
              minWidth: '45%', 
              minHeight: 500,
              borderRadius:10,
              padding:10,
              fontSize:20,
              marginLeft: 20
            }}
            />
            </div>
          </div>
      )
}
