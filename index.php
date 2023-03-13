<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Soltär Löser</title>
    <script src=main.js></script>
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
            <div class="m-2 grow">
                <h3>Spalte <?=$count?></h3>
                <div class="cards">

                </div>
            </div>
            <?php endfor; ?>
        </div>
    </main>
    <template id="cardTemplate">
    </template>
</body>
</html>