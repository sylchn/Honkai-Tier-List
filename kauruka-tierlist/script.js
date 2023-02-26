fetch('../listierlist.json')
  .then(response => response.json())
  .then(data => {
    const dpsData = data.dps;
    const dpsContainer = document.querySelector('#honkai-dps');
    renderData(dpsData, dpsContainer);

    const supportData = data.support;
    const supportContainer = document.querySelector('#honkai-support');
    renderData(supportData, supportContainer);
  })
  .catch(error => console.error(error));

function renderData(data, container) {
  Object.entries(data).forEach(([categoryName, categoryData]) => {
    const categoryHtml = `

        <h3>${categoryName}</h3>
        <div id="honkaitier">
          ${Object.entries(categoryData).map(([heroName, heroData]) => `
            <div class="honkaich" title="${categoryName}">
              <span><img src="${heroData[0].image}" alt="${heroName}">${heroData[0].tier ? `<b>${heroData[0].tier}</b>` : ""}</span>
              <span>
                <strong>${heroName}</strong>
                <strong style="font-weight: 500;">${heroData[0].pilot}</strong>
                <i>${heroData[0].role}</i>
              </span>
            </div>
          `).join("")}
        </div>

    `;
    container.insertAdjacentHTML('beforeend', categoryHtml);
  });
}
