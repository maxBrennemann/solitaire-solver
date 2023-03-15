<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Soltär Löser</title>
    <script src="main.js" type="module"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="dist/output.css" rel="stylesheet">
</head>
<body>
    <header>
        <h1 class="w-full">Der Solitär Spider Löser! test</h1>
    </header>
    <main>
        <div class="flex flex-row">
            <?php for ($count = 1; $count <= 10; $count++): ?>
            <div class="m-2 grow w-1/12" id="col-<?=$count?>">
                <h3>Spalte <?=$count?></h3>
                <div class="cards">

                </div>
            </div>
            <?php endfor; ?>
        </div>
    </main>
    <template id="cardTemplate">
        <div class="card border-x border-t mb-1 rounded-t-md p-3">
            <input class="w-full card-title">
        </div>
    </template>
</body>
</html>