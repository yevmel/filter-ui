// Generated from .\src\antlr\Search.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\n1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0006",
    "\u0006\u001d\n\u0006\r\u0006\u000e\u0006\u001e\u0003\u0007\u0003\u0007",
    "\u0006\u0007#\n\u0007\r\u0007\u000e\u0007$\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0006\t,\n\t\r\t\u000e\t-\u0003\t\u0003\t\u0002\u0002",
    "\n\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0003\u0002\u0005\u0003\u0002$$\u0004\u0002<<??\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0003\u0299\u0002,\u0002,\u00020\u00020\u0002",
    "2\u0002;\u0002C\u0002\\\u0002c\u0002|\u0002\u00ac\u0002\u00ac\u0002",
    "\u00b7\u0002\u00b7\u0002\u00bc\u0002\u00bc\u0002\u00c2\u0002\u00d8\u0002",
    "\u00da\u0002\u00f8\u0002\u00fa\u0002\u02c3\u0002\u02c8\u0002\u02d3\u0002",
    "\u02e2\u0002\u02e6\u0002\u02ee\u0002\u02ee\u0002\u02f0\u0002\u02f0\u0002",
    "\u0347\u0002\u0347\u0002\u0372\u0002\u0376\u0002\u0378\u0002\u0379\u0002",
    "\u037c\u0002\u037f\u0002\u0381\u0002\u0381\u0002\u0388\u0002\u0388\u0002",
    "\u038a\u0002\u038c\u0002\u038e\u0002\u038e\u0002\u0390\u0002\u03a3\u0002",
    "\u03a5\u0002\u03f7\u0002\u03f9\u0002\u0483\u0002\u048c\u0002\u0531\u0002",
    "\u0533\u0002\u0558\u0002\u055b\u0002\u055b\u0002\u0563\u0002\u0589\u0002",
    "\u05b2\u0002\u05bf\u0002\u05c1\u0002\u05c1\u0002\u05c3\u0002\u05c4\u0002",
    "\u05c6\u0002\u05c7\u0002\u05c9\u0002\u05c9\u0002\u05d2\u0002\u05ec\u0002",
    "\u05f2\u0002\u05f4\u0002\u0612\u0002\u061c\u0002\u0622\u0002\u0659\u0002",
    "\u065b\u0002\u0661\u0002\u0670\u0002\u06d5\u0002\u06d7\u0002\u06de\u0002",
    "\u06e3\u0002\u06ea\u0002\u06ef\u0002\u06f1\u0002\u06fc\u0002\u06fe\u0002",
    "\u0701\u0002\u0701\u0002\u0712\u0002\u0741\u0002\u074f\u0002\u07b3\u0002",
    "\u07cc\u0002\u07ec\u0002\u07f6\u0002\u07f7\u0002\u07fc\u0002\u07fc\u0002",
    "\u0802\u0002\u0819\u0002\u081c\u0002\u082e\u0002\u0842\u0002\u085a\u0002",
    "\u0862\u0002\u086c\u0002\u08a2\u0002\u08b6\u0002\u08b8\u0002\u08bf\u0002",
    "\u08d6\u0002\u08e1\u0002\u08e5\u0002\u08eb\u0002\u08f2\u0002\u093d\u0002",
    "\u093f\u0002\u094e\u0002\u0950\u0002\u0952\u0002\u0957\u0002\u0965\u0002",
    "\u0973\u0002\u0985\u0002\u0987\u0002\u098e\u0002\u0991\u0002\u0992\u0002",
    "\u0995\u0002\u09aa\u0002\u09ac\u0002\u09b2\u0002\u09b4\u0002\u09b4\u0002",
    "\u09b8\u0002\u09bb\u0002\u09bf\u0002\u09c6\u0002\u09c9\u0002\u09ca\u0002",
    "\u09cd\u0002\u09ce\u0002\u09d0\u0002\u09d0\u0002\u09d9\u0002\u09d9\u0002",
    "\u09de\u0002\u09df\u0002\u09e1\u0002\u09e5\u0002\u09f2\u0002\u09f3\u0002",
    "\u09fe\u0002\u09fe\u0002\u0a03\u0002\u0a05\u0002\u0a07\u0002\u0a0c\u0002",
    "\u0a11\u0002\u0a12\u0002\u0a15\u0002\u0a2a\u0002\u0a2c\u0002\u0a32\u0002",
    "\u0a34\u0002\u0a35\u0002\u0a37\u0002\u0a38\u0002\u0a3a\u0002\u0a3b\u0002",
    "\u0a40\u0002\u0a44\u0002\u0a49\u0002\u0a4a\u0002\u0a4d\u0002\u0a4e\u0002",
    "\u0a53\u0002\u0a53\u0002\u0a5b\u0002\u0a5e\u0002\u0a60\u0002\u0a60\u0002",
    "\u0a72\u0002\u0a77\u0002\u0a83\u0002\u0a85\u0002\u0a87\u0002\u0a8f\u0002",
    "\u0a91\u0002\u0a93\u0002\u0a95\u0002\u0aaa\u0002\u0aac\u0002\u0ab2\u0002",
    "\u0ab4\u0002\u0ab5\u0002\u0ab7\u0002\u0abb\u0002\u0abf\u0002\u0ac7\u0002",
    "\u0ac9\u0002\u0acb\u0002\u0acd\u0002\u0ace\u0002\u0ad2\u0002\u0ad2\u0002",
    "\u0ae2\u0002\u0ae5\u0002\u0afb\u0002\u0afe\u0002\u0b03\u0002\u0b05\u0002",
    "\u0b07\u0002\u0b0e\u0002\u0b11\u0002\u0b12\u0002\u0b15\u0002\u0b2a\u0002",
    "\u0b2c\u0002\u0b32\u0002\u0b34\u0002\u0b35\u0002\u0b37\u0002\u0b3b\u0002",
    "\u0b3f\u0002\u0b46\u0002\u0b49\u0002\u0b4a\u0002\u0b4d\u0002\u0b4e\u0002",
    "\u0b58\u0002\u0b59\u0002\u0b5e\u0002\u0b5f\u0002\u0b61\u0002\u0b65\u0002",
    "\u0b73\u0002\u0b73\u0002\u0b84\u0002\u0b85\u0002\u0b87\u0002\u0b8c\u0002",
    "\u0b90\u0002\u0b92\u0002\u0b94\u0002\u0b97\u0002\u0b9b\u0002\u0b9c\u0002",
    "\u0b9e\u0002\u0b9e\u0002\u0ba0\u0002\u0ba1\u0002\u0ba5\u0002\u0ba6\u0002",
    "\u0baa\u0002\u0bac\u0002\u0bb0\u0002\u0bbb\u0002\u0bc0\u0002\u0bc4\u0002",
    "\u0bc8\u0002\u0bca\u0002\u0bcc\u0002\u0bce\u0002\u0bd2\u0002\u0bd2\u0002",
    "\u0bd9\u0002\u0bd9\u0002\u0c02\u0002\u0c05\u0002\u0c07\u0002\u0c0e\u0002",
    "\u0c10\u0002\u0c12\u0002\u0c14\u0002\u0c2a\u0002\u0c2c\u0002\u0c3b\u0002",
    "\u0c3f\u0002\u0c46\u0002\u0c48\u0002\u0c4a\u0002\u0c4c\u0002\u0c4e\u0002",
    "\u0c57\u0002\u0c58\u0002\u0c5a\u0002\u0c5c\u0002\u0c62\u0002\u0c65\u0002",
    "\u0c82\u0002\u0c85\u0002\u0c87\u0002\u0c8e\u0002\u0c90\u0002\u0c92\u0002",
    "\u0c94\u0002\u0caa\u0002\u0cac\u0002\u0cb5\u0002\u0cb7\u0002\u0cbb\u0002",
    "\u0cbf\u0002\u0cc6\u0002\u0cc8\u0002\u0cca\u0002\u0ccc\u0002\u0cce\u0002",
    "\u0cd7\u0002\u0cd8\u0002\u0ce0\u0002\u0ce0\u0002\u0ce2\u0002\u0ce5\u0002",
    "\u0cf3\u0002\u0cf4\u0002\u0d02\u0002\u0d05\u0002\u0d07\u0002\u0d0e\u0002",
    "\u0d10\u0002\u0d12\u0002\u0d14\u0002\u0d3c\u0002\u0d3f\u0002\u0d46\u0002",
    "\u0d48\u0002\u0d4a\u0002\u0d4c\u0002\u0d4e\u0002\u0d50\u0002\u0d50\u0002",
    "\u0d56\u0002\u0d59\u0002\u0d61\u0002\u0d65\u0002\u0d7c\u0002\u0d81\u0002",
    "\u0d84\u0002\u0d85\u0002\u0d87\u0002\u0d98\u0002\u0d9c\u0002\u0db3\u0002",
    "\u0db5\u0002\u0dbd\u0002\u0dbf\u0002\u0dbf\u0002\u0dc2\u0002\u0dc8\u0002",
    "\u0dd1\u0002\u0dd6\u0002\u0dd8\u0002\u0dd8\u0002\u0dda\u0002\u0de1\u0002",
    "\u0df4\u0002\u0df5\u0002\u0e03\u0002\u0e3c\u0002\u0e42\u0002\u0e48\u0002",
    "\u0e4f\u0002\u0e4f\u0002\u0e83\u0002\u0e84\u0002\u0e86\u0002\u0e86\u0002",
    "\u0e89\u0002\u0e8a\u0002\u0e8c\u0002\u0e8c\u0002\u0e8f\u0002\u0e8f\u0002",
    "\u0e96\u0002\u0e99\u0002\u0e9b\u0002\u0ea1\u0002\u0ea3\u0002\u0ea5\u0002",
    "\u0ea7\u0002\u0ea7\u0002\u0ea9\u0002\u0ea9\u0002\u0eac\u0002\u0ead\u0002",
    "\u0eaf\u0002\u0ebb\u0002\u0ebd\u0002\u0ebf\u0002\u0ec2\u0002\u0ec6\u0002",
    "\u0ec8\u0002\u0ec8\u0002\u0ecf\u0002\u0ecf\u0002\u0ede\u0002\u0ee1\u0002",
    "\u0f02\u0002\u0f02\u0002\u0f42\u0002\u0f49\u0002\u0f4b\u0002\u0f6e\u0002",
    "\u0f73\u0002\u0f83\u0002\u0f8a\u0002\u0f99\u0002\u0f9b\u0002\u0fbe\u0002",
    "\u1002\u0002\u1038\u0002\u103a\u0002\u103a\u0002\u103d\u0002\u1041\u0002",
    "\u1052\u0002\u1064\u0002\u1067\u0002\u106a\u0002\u1070\u0002\u1088\u0002",
    "\u1090\u0002\u1090\u0002\u109e\u0002\u109f\u0002\u10a2\u0002\u10c7\u0002",
    "\u10c9\u0002\u10c9\u0002\u10cf\u0002\u10cf\u0002\u10d2\u0002\u10fc\u0002",
    "\u10fe\u0002\u124a\u0002\u124c\u0002\u124f\u0002\u1252\u0002\u1258\u0002",
    "\u125a\u0002\u125a\u0002\u125c\u0002\u125f\u0002\u1262\u0002\u128a\u0002",
    "\u128c\u0002\u128f\u0002\u1292\u0002\u12b2\u0002\u12b4\u0002\u12b7\u0002",
    "\u12ba\u0002\u12c0\u0002\u12c2\u0002\u12c2\u0002\u12c4\u0002\u12c7\u0002",
    "\u12ca\u0002\u12d8\u0002\u12da\u0002\u1312\u0002\u1314\u0002\u1317\u0002",
    "\u131a\u0002\u135c\u0002\u1361\u0002\u1361\u0002\u1382\u0002\u1391\u0002",
    "\u13a2\u0002\u13f7\u0002\u13fa\u0002\u13ff\u0002\u1403\u0002\u166e\u0002",
    "\u1671\u0002\u1681\u0002\u1683\u0002\u169c\u0002\u16a2\u0002\u16ec\u0002",
    "\u16f0\u0002\u16fa\u0002\u1702\u0002\u170e\u0002\u1710\u0002\u1715\u0002",
    "\u1722\u0002\u1735\u0002\u1742\u0002\u1755\u0002\u1762\u0002\u176e\u0002",
    "\u1770\u0002\u1772\u0002\u1774\u0002\u1775\u0002\u1782\u0002\u17b5\u0002",
    "\u17b8\u0002\u17ca\u0002\u17d9\u0002\u17d9\u0002\u17de\u0002\u17de\u0002",
    "\u1822\u0002\u1879\u0002\u1882\u0002\u18ac\u0002\u18b2\u0002\u18f7\u0002",
    "\u1902\u0002\u1920\u0002\u1922\u0002\u192d\u0002\u1932\u0002\u193a\u0002",
    "\u1952\u0002\u196f\u0002\u1972\u0002\u1976\u0002\u1982\u0002\u19ad\u0002",
    "\u19b2\u0002\u19cb\u0002\u1a02\u0002\u1a1d\u0002\u1a22\u0002\u1a60\u0002",
    "\u1a63\u0002\u1a76\u0002\u1aa9\u0002\u1aa9\u0002\u1b02\u0002\u1b35\u0002",
    "\u1b37\u0002\u1b45\u0002\u1b47\u0002\u1b4d\u0002\u1b82\u0002\u1bab\u0002",
    "\u1bae\u0002\u1bb1\u0002\u1bbc\u0002\u1be7\u0002\u1be9\u0002\u1bf3\u0002",
    "\u1c02\u0002\u1c37\u0002\u1c4f\u0002\u1c51\u0002\u1c5c\u0002\u1c7f\u0002",
    "\u1c82\u0002\u1c8a\u0002\u1ceb\u0002\u1cee\u0002\u1cf0\u0002\u1cf5\u0002",
    "\u1cf7\u0002\u1cf8\u0002\u1d02\u0002\u1dc1\u0002\u1de9\u0002\u1df6\u0002",
    "\u1e02\u0002\u1f17\u0002\u1f1a\u0002\u1f1f\u0002\u1f22\u0002\u1f47\u0002",
    "\u1f4a\u0002\u1f4f\u0002\u1f52\u0002\u1f59\u0002\u1f5b\u0002\u1f5b\u0002",
    "\u1f5d\u0002\u1f5d\u0002\u1f5f\u0002\u1f5f\u0002\u1f61\u0002\u1f7f\u0002",
    "\u1f82\u0002\u1fb6\u0002\u1fb8\u0002\u1fbe\u0002\u1fc0\u0002\u1fc0\u0002",
    "\u1fc4\u0002\u1fc6\u0002\u1fc8\u0002\u1fce\u0002\u1fd2\u0002\u1fd5\u0002",
    "\u1fd8\u0002\u1fdd\u0002\u1fe2\u0002\u1fee\u0002\u1ff4\u0002\u1ff6\u0002",
    "\u1ff8\u0002\u1ffe\u0002\u2073\u0002\u2073\u0002\u2081\u0002\u2081\u0002",
    "\u2092\u0002\u209e\u0002\u2104\u0002\u2104\u0002\u2109\u0002\u2109\u0002",
    "\u210c\u0002\u2115\u0002\u2117\u0002\u2117\u0002\u211b\u0002\u211f\u0002",
    "\u2126\u0002\u2126\u0002\u2128\u0002\u2128\u0002\u212a\u0002\u212a\u0002",
    "\u212c\u0002\u212f\u0002\u2131\u0002\u213b\u0002\u213e\u0002\u2141\u0002",
    "\u2147\u0002\u214b\u0002\u2150\u0002\u2150\u0002\u2162\u0002\u218a\u0002",
    "\u24b8\u0002\u24eb\u0002\u2c02\u0002\u2c30\u0002\u2c32\u0002\u2c60\u0002",
    "\u2c62\u0002\u2ce6\u0002\u2ced\u0002\u2cf0\u0002\u2cf4\u0002\u2cf5\u0002",
    "\u2d02\u0002\u2d27\u0002\u2d29\u0002\u2d29\u0002\u2d2f\u0002\u2d2f\u0002",
    "\u2d32\u0002\u2d69\u0002\u2d71\u0002\u2d71\u0002\u2d82\u0002\u2d98\u0002",
    "\u2da2\u0002\u2da8\u0002\u2daa\u0002\u2db0\u0002\u2db2\u0002\u2db8\u0002",
    "\u2dba\u0002\u2dc0\u0002\u2dc2\u0002\u2dc8\u0002\u2dca\u0002\u2dd0\u0002",
    "\u2dd2\u0002\u2dd8\u0002\u2dda\u0002\u2de0\u0002\u2de2\u0002\u2e01\u0002",
    "\u2e31\u0002\u2e31\u0002\u3007\u0002\u3009\u0002\u3023\u0002\u302b\u0002",
    "\u3033\u0002\u3037\u0002\u303a\u0002\u303e\u0002\u3043\u0002\u3098\u0002",
    "\u309f\u0002\u30a1\u0002\u30a3\u0002\u30fc\u0002\u30fe\u0002\u3101\u0002",
    "\u3107\u0002\u3130\u0002\u3133\u0002\u3190\u0002\u31a2\u0002\u31bc\u0002",
    "\u31f2\u0002\u3201\u0002\u3402\u0002\u4db7\u0002\u4e02\u0002\u9fec\u0002",
    "\ua002\u0002\ua48e\u0002\ua4d2\u0002\ua4ff\u0002\ua502\u0002\ua60e\u0002",
    "\ua612\u0002\ua621\u0002\ua62c\u0002\ua62d\u0002\ua642\u0002\ua670\u0002",
    "\ua676\u0002\ua67d\u0002\ua681\u0002\ua6f1\u0002\ua719\u0002\ua721\u0002",
    "\ua724\u0002\ua78a\u0002\ua78d\u0002\ua7b0\u0002\ua7b2\u0002\ua7b9\u0002",
    "\ua7f9\u0002\ua803\u0002\ua805\u0002\ua807\u0002\ua809\u0002\ua80c\u0002",
    "\ua80e\u0002\ua829\u0002\ua842\u0002\ua875\u0002\ua882\u0002\ua8c5\u0002",
    "\ua8c7\u0002\ua8c7\u0002\ua8f4\u0002\ua8f9\u0002\ua8fd\u0002\ua8fd\u0002",
    "\ua8ff\u0002\ua8ff\u0002\ua90c\u0002\ua92c\u0002\ua932\u0002\ua954\u0002",
    "\ua962\u0002\ua97e\u0002\ua982\u0002\ua9b4\u0002\ua9b6\u0002\ua9c1\u0002",
    "\ua9d1\u0002\ua9d1\u0002\ua9e2\u0002\ua9e6\u0002\ua9e8\u0002\ua9f1\u0002",
    "\ua9fc\u0002\uaa00\u0002\uaa02\u0002\uaa38\u0002\uaa42\u0002\uaa4f\u0002",
    "\uaa62\u0002\uaa78\u0002\uaa7c\u0002\uaa7c\u0002\uaa80\u0002\uaac0\u0002",
    "\uaac2\u0002\uaac2\u0002\uaac4\u0002\uaac4\u0002\uaadd\u0002\uaadf\u0002",
    "\uaae2\u0002\uaaf1\u0002\uaaf4\u0002\uaaf7\u0002\uab03\u0002\uab08\u0002",
    "\uab0b\u0002\uab10\u0002\uab13\u0002\uab18\u0002\uab22\u0002\uab28\u0002",
    "\uab2a\u0002\uab30\u0002\uab32\u0002\uab5c\u0002\uab5e\u0002\uab67\u0002",
    "\uab72\u0002\uabec\u0002\uac02\u0002\ud7a5\u0002\ud7b2\u0002\ud7c8\u0002",
    "\ud7cd\u0002\ud7fd\u0002\uf902\u0002\ufa6f\u0002\ufa72\u0002\ufadb\u0002",
    "\ufb02\u0002\ufb08\u0002\ufb15\u0002\ufb19\u0002\ufb1f\u0002\ufb2a\u0002",
    "\ufb2c\u0002\ufb38\u0002\ufb3a\u0002\ufb3e\u0002\ufb40\u0002\ufb40\u0002",
    "\ufb42\u0002\ufb43\u0002\ufb45\u0002\ufb46\u0002\ufb48\u0002\ufbb3\u0002",
    "\ufbd5\u0002\ufd3f\u0002\ufd52\u0002\ufd91\u0002\ufd94\u0002\ufdc9\u0002",
    "\ufdf2\u0002\ufdfd\u0002\ufe72\u0002\ufe76\u0002\ufe78\u0002\ufefe\u0002",
    "\uff23\u0002\uff3c\u0002\uff43\u0002\uff5c\u0002\uff68\u0002\uffc0\u0002",
    "\uffc4\u0002\uffc9\u0002\uffcc\u0002\uffd1\u0002\uffd4\u0002\uffd9\u0002",
    "\uffdc\u0002\uffde\u0002\u0002\u0003\r\u0003\u000f\u0003(\u0003*\u0003",
    "<\u0003>\u0003?\u0003A\u0003O\u0003R\u0003_\u0003\u0082\u0003\u00fc",
    "\u0003\u0142\u0003\u0176\u0003\u0282\u0003\u029e\u0003\u02a2\u0003\u02d2",
    "\u0003\u0302\u0003\u0321\u0003\u032f\u0003\u034c\u0003\u0352\u0003\u037c",
    "\u0003\u0382\u0003\u039f\u0003\u03a2\u0003\u03c5\u0003\u03ca\u0003\u03d1",
    "\u0003\u03d3\u0003\u03d7\u0003\u0402\u0003\u049f\u0003\u04b2\u0003\u04d5",
    "\u0003\u04da\u0003\u04fd\u0003\u0502\u0003\u0529\u0003\u0532\u0003\u0565",
    "\u0003\u0602\u0003\u0738\u0003\u0742\u0003\u0757\u0003\u0762\u0003\u0769",
    "\u0003\u0802\u0003\u0807\u0003\u080a\u0003\u080a\u0003\u080c\u0003\u0837",
    "\u0003\u0839\u0003\u083a\u0003\u083e\u0003\u083e\u0003\u0841\u0003\u0857",
    "\u0003\u0862\u0003\u0878\u0003\u0882\u0003\u08a0\u0003\u08e2\u0003\u08f4",
    "\u0003\u08f6\u0003\u08f7\u0003\u0902\u0003\u0917\u0003\u0922\u0003\u093b",
    "\u0003\u0982\u0003\u09b9\u0003\u09c0\u0003\u09c1\u0003\u0a02\u0003\u0a05",
    "\u0003\u0a07\u0003\u0a08\u0003\u0a0e\u0003\u0a15\u0003\u0a17\u0003\u0a19",
    "\u0003\u0a1b\u0003\u0a35\u0003\u0a62\u0003\u0a7e\u0003\u0a82\u0003\u0a9e",
    "\u0003\u0ac2\u0003\u0ac9\u0003\u0acb\u0003\u0ae6\u0003\u0b02\u0003\u0b37",
    "\u0003\u0b42\u0003\u0b57\u0003\u0b62\u0003\u0b74\u0003\u0b82\u0003\u0b93",
    "\u0003\u0c02\u0003\u0c4a\u0003\u0c82\u0003\u0cb4\u0003\u0cc2\u0003\u0cf4",
    "\u0003\u1002\u0003\u1047\u0003\u1084\u0003\u10ba\u0003\u10d2\u0003\u10ea",
    "\u0003\u1102\u0003\u1134\u0003\u1152\u0003\u1174\u0003\u1178\u0003\u1178",
    "\u0003\u1182\u0003\u11c1\u0003\u11c3\u0003\u11c6\u0003\u11dc\u0003\u11dc",
    "\u0003\u11de\u0003\u11de\u0003\u1202\u0003\u1213\u0003\u1215\u0003\u1236",
    "\u0003\u1239\u0003\u1239\u0003\u1240\u0003\u1240\u0003\u1282\u0003\u1288",
    "\u0003\u128a\u0003\u128a\u0003\u128c\u0003\u128f\u0003\u1291\u0003\u129f",
    "\u0003\u12a1\u0003\u12aa\u0003\u12b2\u0003\u12ea\u0003\u1302\u0003\u1305",
    "\u0003\u1307\u0003\u130e\u0003\u1311\u0003\u1312\u0003\u1315\u0003\u132a",
    "\u0003\u132c\u0003\u1332\u0003\u1334\u0003\u1335\u0003\u1337\u0003\u133b",
    "\u0003\u133f\u0003\u1346\u0003\u1349\u0003\u134a\u0003\u134d\u0003\u134e",
    "\u0003\u1352\u0003\u1352\u0003\u1359\u0003\u1359\u0003\u135f\u0003\u1365",
    "\u0003\u1402\u0003\u1443\u0003\u1445\u0003\u1447\u0003\u1449\u0003\u144c",
    "\u0003\u1482\u0003\u14c3\u0003\u14c6\u0003\u14c7\u0003\u14c9\u0003\u14c9",
    "\u0003\u1582\u0003\u15b7\u0003\u15ba\u0003\u15c0\u0003\u15da\u0003\u15df",
    "\u0003\u1602\u0003\u1640\u0003\u1642\u0003\u1642\u0003\u1646\u0003\u1646",
    "\u0003\u1682\u0003\u16b7\u0003\u1702\u0003\u171b\u0003\u171f\u0003\u172c",
    "\u0003\u18a2\u0003\u18e1\u0003\u1901\u0003\u1901\u0003\u1a02\u0003\u1a34",
    "\u0003\u1a37\u0003\u1a40\u0003\u1a52\u0003\u1a85\u0003\u1a88\u0003\u1a99",
    "\u0003\u1ac2\u0003\u1afa\u0003\u1c02\u0003\u1c0a\u0003\u1c0c\u0003\u1c38",
    "\u0003\u1c3a\u0003\u1c40\u0003\u1c42\u0003\u1c42\u0003\u1c74\u0003\u1c91",
    "\u0003\u1c94\u0003\u1ca9\u0003\u1cab\u0003\u1cb8\u0003\u1d02\u0003\u1d08",
    "\u0003\u1d0a\u0003\u1d0b\u0003\u1d0d\u0003\u1d38\u0003\u1d3c\u0003\u1d3c",
    "\u0003\u1d3e\u0003\u1d3f\u0003\u1d41\u0003\u1d43\u0003\u1d45\u0003\u1d45",
    "\u0003\u1d48\u0003\u1d49\u0003\u2002\u0003\u239b\u0003\u2402\u0003\u2470",
    "\u0003\u2482\u0003\u2545\u0003\u3002\u0003\u3430\u0003\u4402\u0003\u4648",
    "\u0003\u6802\u0003\u6a3a\u0003\u6a42\u0003\u6a60\u0003\u6ad2\u0003\u6aef",
    "\u0003\u6b02\u0003\u6b38\u0003\u6b42\u0003\u6b45\u0003\u6b65\u0003\u6b79",
    "\u0003\u6b7f\u0003\u6b91\u0003\u6f02\u0003\u6f46\u0003\u6f52\u0003\u6f80",
    "\u0003\u6f95\u0003\u6fa1\u0003\u6fe2\u0003\u6fe3\u0003\u7002\u0003\u87ee",
    "\u0003\u8802\u0003\u8af4\u0003\ub002\u0003\ub120\u0003\ub172\u0003\ub2fd",
    "\u0003\ubc02\u0003\ubc6c\u0003\ubc72\u0003\ubc7e\u0003\ubc82\u0003\ubc8a",
    "\u0003\ubc92\u0003\ubc9b\u0003\ubca0\u0003\ubca0\u0003\ud402\u0003\ud456",
    "\u0003\ud458\u0003\ud49e\u0003\ud4a0\u0003\ud4a1\u0003\ud4a4\u0003\ud4a4",
    "\u0003\ud4a7\u0003\ud4a8\u0003\ud4ab\u0003\ud4ae\u0003\ud4b0\u0003\ud4bb",
    "\u0003\ud4bd\u0003\ud4bd\u0003\ud4bf\u0003\ud4c5\u0003\ud4c7\u0003\ud507",
    "\u0003\ud509\u0003\ud50c\u0003\ud50f\u0003\ud516\u0003\ud518\u0003\ud51e",
    "\u0003\ud520\u0003\ud53b\u0003\ud53d\u0003\ud540\u0003\ud542\u0003\ud546",
    "\u0003\ud548\u0003\ud548\u0003\ud54c\u0003\ud552\u0003\ud554\u0003\ud6a7",
    "\u0003\ud6aa\u0003\ud6c2\u0003\ud6c4\u0003\ud6dc\u0003\ud6de\u0003\ud6fc",
    "\u0003\ud6fe\u0003\ud716\u0003\ud718\u0003\ud736\u0003\ud738\u0003\ud750",
    "\u0003\ud752\u0003\ud770\u0003\ud772\u0003\ud78a\u0003\ud78c\u0003\ud7aa",
    "\u0003\ud7ac\u0003\ud7c4\u0003\ud7c6\u0003\ud7cd\u0003\ue002\u0003\ue008",
    "\u0003\ue00a\u0003\ue01a\u0003\ue01d\u0003\ue023\u0003\ue025\u0003\ue026",
    "\u0003\ue028\u0003\ue02c\u0003\ue802\u0003\ue8c6\u0003\ue902\u0003\ue945",
    "\u0003\ue949\u0003\ue949\u0003\uee02\u0003\uee05\u0003\uee07\u0003\uee21",
    "\u0003\uee23\u0003\uee24\u0003\uee26\u0003\uee26\u0003\uee29\u0003\uee29",
    "\u0003\uee2b\u0003\uee34\u0003\uee36\u0003\uee39\u0003\uee3b\u0003\uee3b",
    "\u0003\uee3d\u0003\uee3d\u0003\uee44\u0003\uee44\u0003\uee49\u0003\uee49",
    "\u0003\uee4b\u0003\uee4b\u0003\uee4d\u0003\uee4d\u0003\uee4f\u0003\uee51",
    "\u0003\uee53\u0003\uee54\u0003\uee56\u0003\uee56\u0003\uee59\u0003\uee59",
    "\u0003\uee5b\u0003\uee5b\u0003\uee5d\u0003\uee5d\u0003\uee5f\u0003\uee5f",
    "\u0003\uee61\u0003\uee61\u0003\uee63\u0003\uee64\u0003\uee66\u0003\uee66",
    "\u0003\uee69\u0003\uee6c\u0003\uee6e\u0003\uee74\u0003\uee76\u0003\uee79",
    "\u0003\uee7b\u0003\uee7e\u0003\uee80\u0003\uee80\u0003\uee82\u0003\uee8b",
    "\u0003\uee8d\u0003\uee9d\u0003\ueea3\u0003\ueea5\u0003\ueea7\u0003\ueeab",
    "\u0003\ueead\u0003\ueebd\u0003\uf132\u0003\uf14b\u0003\uf152\u0003\uf16b",
    "\u0003\uf172\u0003\uf18b\u0003\u0002\u0004\ua6d8\u0004\ua702\u0004\ub736",
    "\u0004\ub742\u0004\ub81f\u0004\ub822\u0004\ucea3\u0004\uceb2\u0004\uebe2",
    "\u0004\uf802\u0004\ufa1f\u00043\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002\u0002\u0002",
    "\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002\u0002\u0002",
    "\t\u0019\u0003\u0002\u0002\u0002\u000b\u001c\u0003\u0002\u0002\u0002",
    "\r \u0003\u0002\u0002\u0002\u000f(\u0003\u0002\u0002\u0002\u0011+\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0007]\u0002\u0002\u0014\u0004\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007_\u0002\u0002\u0016\u0006\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0007*\u0002\u0002\u0018\b\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0007+\u0002\u0002\u001a\n\u0003\u0002\u0002",
    "\u0002\u001b\u001d\t\u0005\u0002\u0002\u001c\u001b\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\f\u0003\u0002\u0002",
    "\u0002 \"\u0007$\u0002\u0002!#\n\u0002\u0002\u0002\"!\u0003\u0002\u0002",
    "\u0002#$\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0007$\u0002\u0002\'",
    "\u000e\u0003\u0002\u0002\u0002()\t\u0003\u0002\u0002)\u0010\u0003\u0002",
    "\u0002\u0002*,\t\u0004\u0002\u0002+*\u0003\u0002\u0002\u0002,-\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002",
    "./\u0003\u0002\u0002\u0002/0\b\t\u0002\u00020\u0012\u0003\u0002\u0002",
    "\u0002\u0006\u0002\u001e$-\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SearchLexer extends antlr4.Lexer {

    static grammarFileName = "Search.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'['", "']'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, "SIMPLE_STR", "COMPLEX_STR", 
                          "ASSIGNMENT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "SIMPLE_STR", "COMPLEX_STR", 
                      "ASSIGNMENT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

SearchLexer.EOF = antlr4.Token.EOF;
SearchLexer.T__0 = 1;
SearchLexer.T__1 = 2;
SearchLexer.T__2 = 3;
SearchLexer.T__3 = 4;
SearchLexer.SIMPLE_STR = 5;
SearchLexer.COMPLEX_STR = 6;
SearchLexer.ASSIGNMENT = 7;
SearchLexer.WS = 8;



