function createDocument(year, title, details) {
  const template = `<div class='education-container'>
        <div class="year" id="year">
          <h3 class="edu-year" id="edu-year">
            ${year}
          </h3>
        </div>
        <div class="edu-detail" id="edu-detail">
          <h3 class="detail-title" id="detail-title">
            ${title}
          </h3>
          <p class="details" id="details">
            ${details}
          </p>
        </div>
      </div>`;
  const doc = new DOMParser().parseFromString(template, "text/html");
  const div = doc.querySelector(".education-container");
  return div;
}

export default createDocument;