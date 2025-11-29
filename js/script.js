
async function init() {
  showSpinner();
  pokeList = await getPokemon();
  renderPokeCard();
  setTimeout(() => {
    hideSpinner();  
  }, 1500);
  console.log(pokeList);
}


function closeCardDialog() {
  let cardDialog = document.getElementById('dialog_pokecard');
  cardDialog.close();
  document.body.style.overflow = "auto";

}

function showCardDialog(indexPokemon) {
  indexPokemon = Number(indexPokemon);

  if (indexPokemon < 0) {
    indexPokemon = dataList.length - 1;
  }

  if (indexPokemon >= dataList.length) {
    indexPokemon = 0;
  }

  let cardDialogRef = document.getElementById('dialog_pokecard');
  cardDialogRef.showModal();

  renderPokeCardDialog(indexPokemon);
  document.body.style.overflow = "hidden";
}


function searchPokemon() {
  const inputRef = document.getElementById('searchInput');
  const input = inputRef.value.toLowerCase();

  if (input.length < 3) {
    renderPokeCard();
    return;
  }

  let indexList = [];

  for (let indexDataList = 0; indexDataList < dataList.length; indexDataList++) {
    const name = dataList[indexDataList].name.toLowerCase();
    if (name.includes(input)) {
      indexList.push(indexDataList);
    }
  }
  renderSearch(indexList);
}

function clearSearch() {
  let inputClearRef = document.getElementById('searchInput');
  inputClearRef.value = "";
  renderPokeCard();
}


function showSpinner() {
  const spinner = document.getElementById('loader');
  spinner?.classList.remove("d_none");
}


function hideSpinner() {
  const spinner = document.getElementById('loader');
  spinner?.classList.add("d_none");
}


function switchDialogTab(tabName, btn) {
  let tabs = document.getElementsByClassName('dialog_tab');
  for (let index = 0; index < tabs.length; index++) {
    tabs[index].classList.remove('active');
  }

  let activeTab = document.getElementById('dialog_tab_' + tabName);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  let buttons = btn.parentNode.getElementsByClassName('tab_btn');
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].classList.remove('active');
  }

  btn.classList.add('active');
}


function getStats(stats) {
  let baseStatRef = '<div class="w3-container"><br>';
  for (let indexStats = 0; indexStats < stats.length; indexStats++) {
    baseStatRef += getStatTemplate(indexStats, stats);
  }

  return baseStatRef;
}


window.addEventListener('load', function () {
  const dialog = document.getElementById('dialog_pokecard');

  if (!dialog) return;

  dialog.addEventListener('click', function (insideClick) {
    const rect = dialog.getBoundingClientRect();

    const clickedInside =
      insideClick.clientX >= rect.left &&
      insideClick.clientX <= rect.right &&
      insideClick.clientY >= rect.top &&
      insideClick.clientY <= rect.bottom;

    if (!clickedInside) {
      closeCardDialog();
    }
  });
});