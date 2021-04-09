import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/

function Input( onChange ) {
  return (
    <div className="panel-block">
      <input class="input" type="text" onInputChange={inputSubmit}></input>
    </div>
  );
}

export default Input;
