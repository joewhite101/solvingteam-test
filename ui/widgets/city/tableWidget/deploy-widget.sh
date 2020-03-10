INLINE_RUNTIME_CHUNK=false npm run build

pushd build/static/js

mv -f 2*.js vendor.city-table.js
mv -f main*.js main.city-table.js
mv -f runtime~main*.js runtime.city-table.js

popd

serve -l 5002 build
