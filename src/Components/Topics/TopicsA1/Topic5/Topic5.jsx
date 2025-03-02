import React from 'react'
import './Topic5.css'

function Topic5() {
  return (
    <div className='btn'>
        <h1>die Verben-Глаголы</h1>
        <h3>Существует <b>4</b> вида глаголов</h3>
        <p>1)Слабые глаголы</p>
        <p>2)Сильные глаголы</p>
        <p>3)Неправильные глаголы</p>
        <p>4)Модальные глаголы</p>

        <h3>Спряжение слабых глаголов</h3>

        <p> <b>machen</b>-делать</p>

        <div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Лицо</th>
      <th>machen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Ich</b>(я)</td>
        <td>mach<b>e</b></td>
    </tr>
    <tr>
      <td> <b>du</b>(ты)</td>
      <td>mach<b>st</b> </td>
    </tr>
    <tr>
      <td> <b>er</b>(он) <b>sie</b>(она) <b>es</b>(оно)</td>
      <td>mach<b>t</b></td>
    </tr>
    <tr>
      <td><b>Wir</b>(мы)</td>
      <td>mach<b>en</b></td>
    </tr>
    <tr>
        <td><b>Ihr</b>(Вы)</td>
        <td>mach<b>t</b></td>
    </tr>
    <tr>
        <td><b>sie,Sie</b>(они)(Вы)</td>
        <td>mach<b>en</b></td>
    </tr>
  </tbody>
</table>
</div>

        <h3>Часто употребляемые слабые глаголы</h3>
        <div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>
      Глагол (Infinitiv)</th>
      <th>Перевод  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>machen  </td>
        <td>делать  </td>
    </tr>
    <tr>
      <td>lernen  </td>
      <td>учить   </td>
    </tr>
    <tr>
      <td> spielen  </td>
      <td>играть  </td>
    </tr>
    <tr>
      <td>arbeiten  </td>
      <td>работать  </td>
    </tr>
    <tr>
        <td>fragen  </td>
        <td>спрашивать  </td>
    </tr>
    <tr>
        <td>antworten  </td>
        <td>отвечать  </td>
    </tr>
    <tr>
      <td>kaufen    </td>
        <td>покупать    </td>
    </tr>
    <tr>
      <td>suchen    </td>
      <td>искать     </td>
    </tr>
    <tr>
      <td> hören    </td>
      <td>слушать    </td>
    </tr>
    <tr>
      <td>sagen  </td>
      <td>говорить  </td>
    </tr>
    <tr>
        <td>wohnen  </td>
        <td>жить (проживать)    </td>
    </tr>
    <tr>
        <td>tanzen  </td>
        <td>танцевать  </td>
    </tr>
    <tr>
      <td> lachen    </td>
      <td>смеяться  </td>
    </tr>
    <tr>
      <td>zahlen    </td>
      <td>платить  </td>
    </tr>
    <tr>
        <td>reisen  </td>
        <td>путешествовать  </td>
    </tr>
    <tr>
        <td>kochen  </td>
        <td>готовить (еду)    </td>
    </tr>
    <tr>
      <td>leben    </td>
        <td>жить    </td>
    </tr>
  </tbody>
</table>
</div>
    </div>
  )
}

export default Topic5