import React from "react";

export default function DeckList() {
  return (
    <div class="container">
      {/* <ul class="list-group list-group-flush col-9">
        <li class="list-group-item">
          <img class="float-left" width="30" height="30"></img>
          Freeze Mage
        </li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul> */}

      <table class="table table-dark">
        <thead>
          <tr>
            <th class="deck-list-header">Mana Color</th>
            <th>Deck</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img
                class=""
                width="30"
                height="30"
                src="data:image/png;base64,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"
              ></img>
            </th>
            <td>Freeze Mage</td>
            <td>
              <i class="far fa-chart-bar"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img
                class=""
                width="30"
                height="30"
                src="data:image/png;base64,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"
              ></img>
            </th>
            <td>OTK Paladin</td>
            <td>
              <i class="far fa-chart-bar"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img
                class=""
                width="30"
                height="30"
                src="data:image/png;base64,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"
              ></img>
            </th>
            <td>Deathrattle Hunter</td>
            <td>
              <i class="far fa-chart-bar"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}