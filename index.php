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
        <h1 class="w-full">Der Solitär Spider Löser!</h1>
        <button class="border ml-1 px-4 py-2 rounded-md bg-orange-500 border-transparent text-gray-200" onclick="clearCache()">Bereinigen</button>
        <button class="border ml-1 px-4 py-2 rounded-md bg-orange-500 border-transparent text-gray-200" onclick="solve()">Lösen</button>
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
            <span class="card-icon"></span>
            <input class="w-full card-title">
        </div>
    </template>
    <template>
        <p class="hidden"></p>
        <p class="text-5xl block text-rose-600"></p>
    </template>
</body>
</html>