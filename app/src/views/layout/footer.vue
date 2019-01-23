<template>
    <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h5>About</h5>
                    <ul>
                        <li>
                        <p>
                        A full functional project javascript</p>
                        </li>
                      
                    </ul>
                </div>
                <div class="col-sm-4">
                    <h5>Privacy Policy</h5>
                    <ul>
                        <li>
                            <a href="https://www.freeprivacypolicy.com/privacy/view/db15f8ec159b46643839942f2051e35c">Privacy Policy for bookapp</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <p>Designed and Coded by <br/>
                        maria pestematzogloy @copyright 2019
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footer-comp"
    }
</script>

<style>
    #myFooter {
        flex: 0 0 auto;
        -webkit-flex: 0 0 auto;
    }

    #myFooter {
        background-color: #f7f7f7;
        padding: 50px 0;
        border-top: 1px solid #ddd;
    }

    #myFooter ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    #myFooter h5 {
        margin-top: 0;
    }

    .footer-copyright {
        color: #444;
        margin-top: 10px;
        padding-bottom: 5px;
        margin-right: 20px;
        text-align: left;
    }
</style>

 
