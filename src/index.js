const fetchDataGithub = async () => {
  // Panggil API untuk mendapatkan data
  const payload = document.getElementById("username");
  const username = payload.value !== "" ? payload.value : "Lelianto";

  await axios
    .get(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/json",
        Authorization: "token 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",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        const element = document.getElementById("user-image");
        element.setAttribute("src", res.data.avatar_url);
      }
    })
    .catch((error) => console.log(error));
};
document.getElementById("getUser").addEventListener("click", fetchDataGithub);

fetchDataGithub();
