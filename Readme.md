.header {
    display: flex;
    justify-content: space-between;
    border: 1.25px solid black;
}
.logo {
    width: 100px;
}
.nav-items > ul {
    padding:0px 20px;
    display: flex;
    list-style-type: none;
    font-size: 15px;
}
.nav-items > ul > li {
    margin:10px;
    padding:10px
}

.res-card {
    width: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    font-family: sans-serif;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
  }
  
.search {
    padding : 10px;
}
.res-logo {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
  .res-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* center the items */
    gap: 16px;               /* spacing between cards */
    padding: 10px;
    box-sizing: border-box;
  }
  
  
  
