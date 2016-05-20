(function() {var implementors = {};
implementors["libc"] = [];implementors["clang_sys"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXAvailabilityKind.html' title='clang_sys::CXAvailabilityKind'>CXAvailabilityKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXCallingConv.html' title='clang_sys::CXCallingConv'>CXCallingConv</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXChildVisitResult.html' title='clang_sys::CXChildVisitResult'>CXChildVisitResult</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXCompilationDatabase_Error.html' title='clang_sys::CXCompilationDatabase_Error'>CXCompilationDatabase_Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXCompletionChunkKind.html' title='clang_sys::CXCompletionChunkKind'>CXCompletionChunkKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXCursorKind.html' title='clang_sys::CXCursorKind'>CXCursorKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXDiagnosticSeverity.html' title='clang_sys::CXDiagnosticSeverity'>CXDiagnosticSeverity</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXErrorCode.html' title='clang_sys::CXErrorCode'>CXErrorCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXIdxAttrKind.html' title='clang_sys::CXIdxAttrKind'>CXIdxAttrKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXIdxEntityCXXTemplateKind.html' title='clang_sys::CXIdxEntityCXXTemplateKind'>CXIdxEntityCXXTemplateKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXIdxEntityKind.html' title='clang_sys::CXIdxEntityKind'>CXIdxEntityKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXIdxEntityLanguage.html' title='clang_sys::CXIdxEntityLanguage'>CXIdxEntityLanguage</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXIdxEntityRefKind.html' title='clang_sys::CXIdxEntityRefKind'>CXIdxEntityRefKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXIdxObjCContainerKind.html' title='clang_sys::CXIdxObjCContainerKind'>CXIdxObjCContainerKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXLanguageKind.html' title='clang_sys::CXLanguageKind'>CXLanguageKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXLinkageKind.html' title='clang_sys::CXLinkageKind'>CXLinkageKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXLoadDiag_Error.html' title='clang_sys::CXLoadDiag_Error'>CXLoadDiag_Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXRefQualifierKind.html' title='clang_sys::CXRefQualifierKind'>CXRefQualifierKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXResult.html' title='clang_sys::CXResult'>CXResult</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXSaveError.html' title='clang_sys::CXSaveError'>CXSaveError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXTUResourceUsageKind.html' title='clang_sys::CXTUResourceUsageKind'>CXTUResourceUsageKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXTokenKind.html' title='clang_sys::CXTokenKind'>CXTokenKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXTypeKind.html' title='clang_sys::CXTypeKind'>CXTypeKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXTypeLayoutError.html' title='clang_sys::CXTypeLayoutError'>CXTypeLayoutError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CXVisitorResult.html' title='clang_sys::CXVisitorResult'>CXVisitorResult</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='clang_sys/enum.CX_CXXAccessSpecifier.html' title='clang_sys::CX_CXXAccessSpecifier'>CX_CXXAccessSpecifier</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCodeComplete_Flags.html' title='clang_sys::CXCodeComplete_Flags'>CXCodeComplete_Flags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCompletionContext.html' title='clang_sys::CXCompletionContext'>CXCompletionContext</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXDiagnosticDisplayOptions.html' title='clang_sys::CXDiagnosticDisplayOptions'>CXDiagnosticDisplayOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXGlobalOptFlags.html' title='clang_sys::CXGlobalOptFlags'>CXGlobalOptFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxDeclInfoFlags.html' title='clang_sys::CXIdxDeclInfoFlags'>CXIdxDeclInfoFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIndexOptFlags.html' title='clang_sys::CXIndexOptFlags'>CXIndexOptFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXNameRefFlags.html' title='clang_sys::CXNameRefFlags'>CXNameRefFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXObjCDeclQualifierKind.html' title='clang_sys::CXObjCDeclQualifierKind'>CXObjCDeclQualifierKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXObjCPropertyAttrKind.html' title='clang_sys::CXObjCPropertyAttrKind'>CXObjCPropertyAttrKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXReparse_Flags.html' title='clang_sys::CXReparse_Flags'>CXReparse_Flags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXSaveTranslationUnit_Flags.html' title='clang_sys::CXSaveTranslationUnit_Flags'>CXSaveTranslationUnit_Flags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXTranslationUnit_Flags.html' title='clang_sys::CXTranslationUnit_Flags'>CXTranslationUnit_Flags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCompilationDatabase.html' title='clang_sys::CXCompilationDatabase'>CXCompilationDatabase</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCompileCommand.html' title='clang_sys::CXCompileCommand'>CXCompileCommand</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCompileCommands.html' title='clang_sys::CXCompileCommands'>CXCompileCommands</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCompletionString.html' title='clang_sys::CXCompletionString'>CXCompletionString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCursorSet.html' title='clang_sys::CXCursorSet'>CXCursorSet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXDiagnostic.html' title='clang_sys::CXDiagnostic'>CXDiagnostic</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXDiagnosticSet.html' title='clang_sys::CXDiagnosticSet'>CXDiagnosticSet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXFile.html' title='clang_sys::CXFile'>CXFile</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxClientASTFile.html' title='clang_sys::CXIdxClientASTFile'>CXIdxClientASTFile</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxClientContainer.html' title='clang_sys::CXIdxClientContainer'>CXIdxClientContainer</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxClientEntity.html' title='clang_sys::CXIdxClientEntity'>CXIdxClientEntity</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxClientFile.html' title='clang_sys::CXIdxClientFile'>CXIdxClientFile</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIndex.html' title='clang_sys::CXIndex'>CXIndex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIndexAction.html' title='clang_sys::CXIndexAction'>CXIndexAction</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXModule.html' title='clang_sys::CXModule'>CXModule</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXRemapping.html' title='clang_sys::CXRemapping'>CXRemapping</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXTranslationUnit.html' title='clang_sys::CXTranslationUnit'>CXTranslationUnit</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCodeCompleteResults.html' title='clang_sys::CXCodeCompleteResults'>CXCodeCompleteResults</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCompletionResult.html' title='clang_sys::CXCompletionResult'>CXCompletionResult</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCursor.html' title='clang_sys::CXCursor'>CXCursor</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXCursorAndRangeVisitor.html' title='clang_sys::CXCursorAndRangeVisitor'>CXCursorAndRangeVisitor</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXFileUniqueID.html' title='clang_sys::CXFileUniqueID'>CXFileUniqueID</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxAttrInfo.html' title='clang_sys::CXIdxAttrInfo'>CXIdxAttrInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxBaseClassInfo.html' title='clang_sys::CXIdxBaseClassInfo'>CXIdxBaseClassInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxCXXClassDeclInfo.html' title='clang_sys::CXIdxCXXClassDeclInfo'>CXIdxCXXClassDeclInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxContainerInfo.html' title='clang_sys::CXIdxContainerInfo'>CXIdxContainerInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxDeclInfo.html' title='clang_sys::CXIdxDeclInfo'>CXIdxDeclInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxEntityInfo.html' title='clang_sys::CXIdxEntityInfo'>CXIdxEntityInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxEntityRefInfo.html' title='clang_sys::CXIdxEntityRefInfo'>CXIdxEntityRefInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxIBOutletCollectionAttrInfo.html' title='clang_sys::CXIdxIBOutletCollectionAttrInfo'>CXIdxIBOutletCollectionAttrInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxImportedASTFileInfo.html' title='clang_sys::CXIdxImportedASTFileInfo'>CXIdxImportedASTFileInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxIncludedFileInfo.html' title='clang_sys::CXIdxIncludedFileInfo'>CXIdxIncludedFileInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxLoc.html' title='clang_sys::CXIdxLoc'>CXIdxLoc</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxObjCCategoryDeclInfo.html' title='clang_sys::CXIdxObjCCategoryDeclInfo'>CXIdxObjCCategoryDeclInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxObjCContainerDeclInfo.html' title='clang_sys::CXIdxObjCContainerDeclInfo'>CXIdxObjCContainerDeclInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxObjCInterfaceDeclInfo.html' title='clang_sys::CXIdxObjCInterfaceDeclInfo'>CXIdxObjCInterfaceDeclInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxObjCPropertyDeclInfo.html' title='clang_sys::CXIdxObjCPropertyDeclInfo'>CXIdxObjCPropertyDeclInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxObjCProtocolRefInfo.html' title='clang_sys::CXIdxObjCProtocolRefInfo'>CXIdxObjCProtocolRefInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXIdxObjCProtocolRefListInfo.html' title='clang_sys::CXIdxObjCProtocolRefListInfo'>CXIdxObjCProtocolRefListInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXPlatformAvailability.html' title='clang_sys::CXPlatformAvailability'>CXPlatformAvailability</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXSourceLocation.html' title='clang_sys::CXSourceLocation'>CXSourceLocation</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXSourceRange.html' title='clang_sys::CXSourceRange'>CXSourceRange</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXSourceRangeList.html' title='clang_sys::CXSourceRangeList'>CXSourceRangeList</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXString.html' title='clang_sys::CXString'>CXString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXTUResourceUsage.html' title='clang_sys::CXTUResourceUsage'>CXTUResourceUsage</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXTUResourceUsageEntry.html' title='clang_sys::CXTUResourceUsageEntry'>CXTUResourceUsageEntry</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXToken.html' title='clang_sys::CXToken'>CXToken</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXType.html' title='clang_sys::CXType'>CXType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXUnsavedFile.html' title='clang_sys::CXUnsavedFile'>CXUnsavedFile</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.CXVersion.html' title='clang_sys::CXVersion'>CXVersion</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='clang_sys/struct.IndexerCallbacks.html' title='clang_sys::IndexerCallbacks'>IndexerCallbacks</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()