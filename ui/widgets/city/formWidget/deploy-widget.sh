INLINE_RUNTIME_CHUNK=false npm run build

pushd build/static/js

mv -f 2*.js vendor.city-form.js
mv -f main*.js main.city-form.js
mv -f runtime~main*.js runtime.city-form.js

popd

serve -l 5001 build
