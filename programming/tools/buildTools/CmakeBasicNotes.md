# Cmake Basic Notes

<!-- TOC -->

- [Cmake Basic Notes](#cmake-basic-notes)
  - [Basic Build System](#basic-build-system)
    - [Basic Options](#basic-options)
  - [Flow Control](#flow-control)
    - [if control](#if-control)
    - [foreach control](#foreach-control)
    - [while control](#while-control)
    - [function control](#function-control)
      - [Basic Usage of Function](#basic-usage-of-function)
      - [Parse Arguments of Function](#parse-arguments-of-function)
  - [Useful Command](#useful-command)
    - [Checking Command](#checking-command)
    - [Testing Command](#testing-command)
    - [Option Command](#option-command)
    - [Math Command](#math-command)
    - [List Command](#list-command)
    - [Package Command](#package-command)
    - [Install Command](#install-command)
      - [install binaries](#install-binaries)
      - [install normal files](#install-normal-files)
      - [install scripts](#install-scripts)
      - [install directories](#install-directories)
      - [Install Demo](#install-demo)
    - [find packages](#find-packages)
      - [Basic Usage of Find](#basic-usage-of-find)
      - [Find.cmake](#findcmake)
      - [Full Find Demo](#full-find-demo)
  - [Useful Tools](#useful-tools)
  - [Config Command](#config-command)
    - [Version Config](#version-config)
    - [Project Config](#project-config)
    - [Environment Config](#environment-config)
    - [Library for Clients Usage](#library-for-clients-usage)
  - [Test Setting](#test-setting)
  - [Generator Expression](#generator-expression)
  - [Submodule and Dependencies](#submodule-and-dependencies)
  - [CMake Patterns](#cmake-patterns)
    - [Modern CMake](#modern-cmake)
      - [Interface vs Private](#interface-vs-private)
    - [Nice Patterns](#nice-patterns)
    - [Anti Patterns](#anti-patterns)
  - [Reference](#reference)

<!-- /TOC -->

## Basic Build System

build for executable

```bash
cmake_minimum_required(VERSION 2.8.9)
project(directory_test)

add_definitions(-DUSEXX)
add_compile_options(-std=c++11 -Wall -Wextra)

# Bring the headers, such as Student.h into the project
include_directories(include)

# Can manually add the sources using the set command as follows:
# set(SOURCES src/mainapp.cpp src/Student.cpp)

# However, the file(GLOB...) allows for wildcard additions:
file(GLOB SOURCES "src/*.cpp")

message(STATUS "CMake demo: build for executable")

add_executable(testStudent ${SOURCES})
```

build for library

```bash
cmake_minimum_required(VERSION 2.8.9)
project(directory_test)
set(CMAKE_BUILD_TYPE Release)

# Bring the headers, such as Student.h into the project
include_directories(include)

# However, the file(GLOB...) allows for wildcard additions:
file(GLOB SOURCES "src/*.cpp")

# Generate the shared library from the sources
# flag: SHARED, STATIC, MODULE
add_library(testStudent SHARED ${SOURCES})

message(STATUS "CMake demo: build for library")

# Set the location for library installation -- i.e., /usr/lib in this case
# not really necessary in this example. Use "sudo make install" to apply
install(TARGETS testStudent DESTINATION /usr/lib)
```

use a shared or static library

```bash
cmake_minimum_required(VERSION 2.8.9)
project(TestLibrary)

# For the shared library:
set(PROJECT_LINK_LIBS libtestStudent.so)
link_directories(~/exploringBB/extras/cmake/studentlib_shared/build)

# For the static library:
# set (PROJECT_LINK_LIBS libtestStudent.a)
# link_directories(~/exploringBB/extras/cmake/studentlib_static/build)

include_directories(~/exploringBB/extras/cmake/studentlib_shared/include)

add_executable(libtest libtest.cpp)
target_link_libraries(libtest ${PROJECT_LINK_LIBS} )

message(STATUS "CMake demo: use library")
```

set output of library

```bash
# 指定lib输出目录
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# 指定版本
set(DEMO5_VERSION_MAJOR 1)
set(DEMO5_VERSION_MINOR 1)
set(DEMO5_VERSION_PATCH 1)
set(DEMO5_VERSION ${DEMO5_VERSION_MAJOR}.${DEMO5_VERSION_MINOR}.${DEMO5_VERSION_PATCH})

aux_source_directory(. SRC_LIST)

add_library(demo5 SHARED ${SRC_LIST})
set_target_properties(
    demo5 PROPERTIES
    VERSION ${DEMO5_VERSION}
    SOVERSION ${DEMO5_VERSION_MAJOR}
)
```

build for library and executable

```bash
cmake_minimum_required(VERSION 3.5)
project(MiniSat VERSION 2.2 LANGUAGES CXX)

add_library(libminisat STATIC
    minisat/core/Solver.cc
    minisat/utils/Options.cc
    minisat/utils/System.cc
    minisat/simp/SimpSolver.cc
)

target_compile_features(libminisat
    PUBLIC
      cxx_attributes
      cxx_defaulted_functions
      cxx_deleted_functions
      cxx_final
)

target_include_directories(libminisat PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})

target_compile_definitions(libminisat PUBLIC __STDC_LIMIT_MACROS __STDC_FORMAT_MACROS)

# Also build the two MiniSat executables
add_executable(minisat minisat/core/Main.cc)
target_link_libraries(minisat libminisat)

add_executable(minisat-simp minisat/simp/Main.cc)
target_link_libraries(minisat-simp libminisat)
```

### Basic Options

```bash
make VERBOSE=1
```

Standard options:

- `-DCMAKE_BUILD_TYPE=` Pick from Release, RelWithDebInfo, Debug, or sometimes more
- `-DCMAKE_INSTALL_PREFIX=` /usr/local (the default), ~/.local
- `-D BUILD_SHARED_LIBS=`
- `--trace` print every line of CMake

## Flow Control

### if control

- Unary: NOT, TARGET, EXISTS (file), DEFINED
- Binary: STREQUAL, AND, OR, MATCHES(regular expression), VERSION_LESS, VERSION_LESS_EQUAL

```bash
if(WIN32)
    message("This is win32 platform")
else()
    message("This is not win32 platform")
endif()
```

### foreach control

```bash
set(FOR_LIST demo1.cpp demo2.cpp demo3.cpp)
foreach(f ${FOR_LIST})
    message("now is file: " ${f})
endforeach ()
```

### while control

```bash
set(A "1")
set(B "1")
while(A LESS "1000000")
    message("${A}")                 # Print A
    math(EXPR T "${A} + ${B}")      # Add values of A and B; store result in T
    set(A "${B}")                   # Assign the value of B to A
    set(B "${T}")                   # Assign the value of T to B
endwhile()
```

### function control

#### Basic Usage of Function

```bash
function(doubleIt VALUE)
    math(EXPR RESULT "${VALUE} * 2")
    message("${RESULT}")
endfunction()

doubleIt("4")          # Prints: 8
```

```bash
function(doubleIt VARNAME VALUE)
    math(EXPR RESULT "${VALUE} * 2")
    set(${VARNAME} "${RESULT}" PARENT_SCOPE)
endfunction()

doubleIt(RESULT "4")   # Tell the function to set the variable named RESULT
message("${RESULT}")   # Prints: 8
```

```bash
function(doubleEach)
    foreach(ARG ${ARGN})           # Iterate over each argument
        math(EXPR N "${ARG} * 2")  # Double ARG's numeric value
        message("${N}")            # Print N
    endforeach()
endfunction()

doubleEach(5 6 7 8)                # Prints 10, 12, 14, 16 on separate lines
```

#### Parse Arguments of Function

```bash
function(COMPLEX)
cmake_parse_arguments(
    COMPLEX_PREFIX
    "SINGLE;ANOTHER"
    "ONE_VALUE;ALSO_ONE_VALUE"
    "MULTI_VALUES"
    ${ARGN}
)

endfunction()

complex(SINGLE ONE_VALUE value MULTI_VALUES some other values)
```

Inside the function after this call, you'll find:

```bash
COMPLEX_PREFIX_SINGLE = TRUE
COMPLEX_PREFIX_ANOTHER = FALSE
COMPLEX_PREFIX_ONE_VALUE = "value"
COMPLEX_PREFIX_ALSO_ONE_VALUE = <UNDEFINED>
COMPLEX_PREFIX_MULTI_VALUES = "some;other;values"
```

## Useful Command

### Checking Command

```bash
# does this system provide the log and exp functions?
include(CheckFunctionExists)
check_function_exists(log HAVE_LOG)
check_function_exists(exp HAVE_EXP)
```

### Testing Command

```bash
#define a macro to simplify adding tests, then use it
macro(do_test arg result)
  add_test(TutorialComp${arg} Tutorial ${arg})
  set_tests_properties(TutorialComp${arg}
    PROPERTIES PASS_REGULAR_EXPRESSION ${result})
endmacro(do_test)

# do a bunch of result based tests
do_test(25 "25 is 5")
do_test(-25 "-25 is 0")
```

```bash
include(CTest)

# does the application run
add_test (TutorialRuns Tutorial 25)

# does it sqrt of 25
add_test (TutorialComp25 Tutorial 25)
set_tests_properties (TutorialComp25 PROPERTIES PASS_REGULAR_EXPRESSION "25 is 5")

# does it handle negative numbers
add_test (TutorialNegative Tutorial -25)
set_tests_properties (
    TutorialNegative PROPERTIES
    PASS_REGULAR_EXPRESSION "-25 is 0"
)

# does it handle small numbers
add_test (TutorialSmall Tutorial 0.0001)
set_tests_properties (
    TutorialSmall PROPERTIES
    PASS_REGULAR_EXPRESSION "0.0001 is 0.01"
)

# does the usage message work?
add_test (TutorialUsage Tutorial)
set_tests_properties (
    TutorialUsage PROPERTIES
    PASS_REGULAR_EXPRESSION "Usage:.*number"
)
```

### Option Command

```bash
# 是否使用我们自己的函数？
option(USE_MYMATH
        "Use tutorial provided math implementation" ON)

# add the MathFunctions library?
if(USE_MYMATH)
  include_directories("${PROJECT_SOURCE_DIR}/MathFunctions")
  add_subdirectory(MathFunctions)
  set(EXTRA_LIBS ${EXTRA_LIBS} MathFunctions)
endif(USE_MYMATH)

# add the executable
add_executable(Tutorial tutorial.cxx)
target_link_libraries(Tutorial  ${EXTRA_LIBS})
```

### Math Command

```bash
set(ARGS "EXPR;T;1 + 1")
math(${ARGS})                      # Equivalent to calling math(EXPR T "1 + 1")
```

### List Command

```bash
set(MY_LIST These are separate arguments)
list(REMOVE_ITEM MY_LIST "separate")  # Removes "separate" from the list
message("${MY_LIST}")                 # Prints: These;are;argumentsk
```

### Package Command

```bash
# build a CPack driven installer package
include(InstallRequiredSystemLibraries)
set(CPACK_RESOURCE_FILE_LICENSE
     "${CMAKE_CURRENT_SOURCE_DIR}/License.txt")
set(CPACK_PACKAGE_VERSION_MAJOR "${Tutorial_VERSION_MAJOR}")
set(CPACK_PACKAGE_VERSION_MINOR "${Tutorial_VERSION_MINOR}")
include(CPack)
```

```bash
cpack --config CPackConfig.cmake
cpack --config CPackSourceConfig.cmake
```

### Install Command

#### install binaries

```bash
INSTALL(TARGETS targets...
        [[ARCHIVE|LIBRARY|RUNTIME]
        [DESTINATION < dir >]
        [PERMISSIONS permissions...]  
        [CONFIGURATIONS
        [Debug|Release|...]]
        [COMPONENT < component >]
        [OPTIONAL]
        ] [...])

INSTALL(TARGETS myrun mylib mystaticlib
        RUNTIME DESTINATION bin
        LIBRARY DESTINATION lib
        ARCHIVE DESTINATION libstatic）
```

#### install normal files

```bash
INSTALL(FILES files... DESTINATION <dir>
     [PERMISSIONS permissions...]
     [CONFIGURATIONS [Debug|Release|...]]
     [COMPONENT <component>]
     [RENAME <name>] [OPTIONAL])


INSTALL(FILES COPYRIGHT README DESTINATION share/doc/cmake/t2)
```

#### install scripts

```bash
INSTALL(PROGRAMS files... DESTINATION <dir>
     [PERMISSIONS permissions...]
     [CONFIGURATIONS [Debug|Release|...]]
     [COMPONENT <component>]
     [RENAME <name>] [OPTIONAL])


INSTALL(PROGRAMS runhello.sh DESTINATION bin)
```

#### install directories

```bash
INSTALL(DIRECTORY dirs... DESTINATION <dir>
     [FILE_PERMISSIONS permissions...]
     [DIRECTORY_PERMISSIONS permissions...]
     [USE_SOURCE_PERMISSIONS]
     [CONFIGURATIONS [Debug|Release|...]]
     [COMPONENT <component>]
     [[PATTERN <pattern> | REGEX <regex>]
     [EXCLUDE] [PERMISSIONS permissions...]] [...])

INSTALL(DIRECTORY icons scripts/ DESTINATION share/myproj
     PATTERN "CVS" EXCLUDE
     PATTERN "scripts/*"
     PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ
     GROUP_EXECUTE GROUP_READ)
```

#### Install Demo

```bash
find_package(Bar 2.0 REQUIRED)
add_library(Foo ...)
target_link_libraries(Foo PRIVATE Bar::Bar)

install(TARGETS Foo EXPORT FooTargets
  LIBRARY DESTINATION lib
  ARCHIVE DESTINATION lib
  RUNTIME DESTINATION bin
  INCLUDES DESTINATION include
)

install(EXPORT FooTargets
  FILE FooTargets.cmake
  NAMESPACE Foo::
  DESTINATION lib/cmake/Foo
)
```

### find packages

find modules

```bash
cmake –-help-module-list
ls /usr/share/cmake/Modules/

cmake --help-module FindBZip2
```

#### Basic Usage of Find

```bash
project(helloworld)
add_executable(helloworld hello.c)
find_package (BZip2)
if (BZIP2_FOUND)
    include_directories(${BZIP_INCLUDE_DIRS})
    target_link_libraries(helloworld ${BZIP2_LIBRARIES})
endif (BZIP2_FOUND)
```

```bash
find_path(Foo_INCLUDE_DIR foo.h)
find_library(Foo_LIBRARY foo)
mark_as_advanced(Foo_INCLUDE_DIR Foo_LIBRARY)

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(Foo
  REQUIRED_VARS Foo_LIBRARY Foo_INCLUDE_DIR
)

if(Foo_FOUND AND NOT TARGET Foo::Foo)
  add_library(Foo::Foo UNKNOWN IMPORTED)
  set_target_properties(Foo::Foo PROPERTIES
    IMPORTED_LINK_INTERFACE_LANGUAGES "CXX"
    IMPORTED_LOCATION "${Foo_LIBRARY}"
    INTERFACE_INCLUDE_DIRECTORIES "${Foo_INCLUDE_DIR}"
  )
endif()
```

#### Find.cmake

add find module for project

```bash
# cmake/FindDEMO9LIB.cmake
# 辅助输出信息
message("now using FindDEMO9LIB.cmake find demo9 lib")

# 将demo9.h文件路径赋值给DEMO9LIB_INCLUDE_DIR
FIND_PATH(DEMO9LIB_INCLUDE_DIR demo9.h /usr/include/demo9/
        /usr/local/demo9/include/)
message("./h dir ${DEMO9LIB_INCLUDE_DIR}")

# 将libdemo9_lib.a文件路径赋值给DEMO9LIB_LIBRARY
FIND_LIBRARY(DEMO9LIB_LIBRARY libdemo9_lib.a /usr/local/demo9/lib/)
message("lib dir: ${DEMO9LIB_LIBRARY}")

if(DEMO9LIB_INCLUDE_DIR AND DEMO9LIB_LIBRARY)
    # 设置变量结果
    set(DEMO9LIB_FOUND TRUE)
endif(DEMO9LIB_INCLUDE_DIR AND DEMO9LIB_LIBRARY)
```

#### Full Find Demo

```bash
# CMakeLists.txt
cmake_minimum_required(VERSION 3.5)

project(demo9)

# create libdemo9_lib.a
set(SRC_LIB demo9.cpp)
add_library(demo9_lib STATIC ${SRC_LIB})

# install it
install(TARGETS demo9_lib DESTINATION demo9/lib)
install(FILES demo9.h DESTINATION demo9/include)

# create demo9_main exectuable
set(SRC_EXE demo9_main.cpp)

# set demo9_lib cmake module path
set(CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake)
message("cmake_module_path: ${CMAKE_MODULE_PATH}")
find_package(DEMO9LIB)

if(DEMO9LIB_FOUND)
    add_executable(demo9_main ${SRC_EXE})
    message("found demo9 ${DEMO9LIB_INCLUDE_DIR} ${DEMO9LIB_LIBRARY}")
    include_directories(${DEMO9LIB_INCLUDE_DIR})
    target_link_libraries(demo9_main ${DEMO9LIB_LIBRARY})
else()
    message("not found DEMO9LIB_FOUND")
endif(DEMO9LIB_FOUND)
```

## Useful Tools

ldd and ar

```bash
ldd library.so
ar -t library.a
```

Makefile

```bash
# -----------------------------------------------------------------------------
# CMake project wrapper Makefile ----------------------------------------------
# -----------------------------------------------------------------------------

SHELL := /bin/bash
RM    := rm -rf
MKDIR := mkdir -p

all: ./build/Makefile
    @ $(MAKE) -C build

./build/Makefile:
    @  ($(MKDIR) build > /dev/null)
    @  (cd build > /dev/null 2>&1 && cmake ..)

clean:
    @  ($(MKDIR) build > /dev/null)
    @  (cd build > /dev/null 2>&1 && cmake .. > /dev/null 2>&1)
    @- $(MAKE) --silent -C build clean || true
    @- $(RM) ./build/Makefile
    @- $(RM) ./build/src
    @- $(RM) ./build/test
    @- $(RM) ./build/CMake*
    @- $(RM) ./build/cmake.*
    @- $(RM) ./build/*.cmake
    @- $(RM) ./build/*.txt

ifeq ($(findstring clean,$(MAKECMDGOALS)),)
    $(MAKECMDGOALS): ./build/Makefile
    @ $(MAKE) -C build $(MAKECMDGOALS)
endif
```

## Config Command

### Version Config

```bash
cmake_minimum_required(VERSION 3.1)

if(${CMAKE_VERSION} VERSION_LESS 3.13)
  cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
else()
  cmake_policy(VERSION 3.13)
endif()
```

### Project Config

```bash
project(MyProject VERSION 1.0 DESCRIPTION "Very nice project" LANGUAGES CXX)
```

### Environment Config

`set(ENV{variable_name} value)` and get `$ENV{variable_name}` environment variables

### Library for Clients Usage

```bash
include(CMakePackageConfigHelpers)
write_basic_package_version_file("FooConfigVersion.cmake"
  VERSION ${Foo_VERSION}
  COMPATIBILITY SameMajorVersion
)

install(FILES "FooConfig.cmake" "FooConfigVersion.cmake"
  DESTINATION lib/cmake/Foo
)
```

```bash
include(CMakeFindDependencyMacro)
find_dependency(Bar 2.0)
include("${CMAKE_CURRENT_LIST_DIR}/FooTargets.cmake")
```

## Test Setting

```bash
set(CTEST_SOURCE_DIRECTORY "/source")
set(CTEST_BINARY_DIRECTORY "/binary")

set(ENV{CXXFLAGS} "--coverage")
set(CTEST_CMAKE_GENERATOR "Ninja")
set(CTEST_USE_LAUNCHERS 1)

set(CTEST_COVERAGE_COMMAND "gcov")
set(CTEST_MEMORYCHECK_COMMAND "valgrind")
#set(CTEST_MEMORYCHECK_TYPE "ThreadSanitizer")

ctest_start("Continuous")
ctest_configure()
ctest_build()
ctest_test()
ctest_coverage()
ctest_memcheck()
ctest_submit()
```

```bash
macro(package_add_test TESTNAME)
    add_executable(${TESTNAME} ${ARGN})
    target_link_libraries(${TESTNAME} gtest gmock gtest_main)
    add_test(${TESTNAME} COMMAND ${TESTNAME})
    set_target_properties(${TESTNAME} PROPERTIES FOLDER tests)
endmacro()

package_add_test(test1 test1.cpp)
```

## Generator Expression

Most CMake commands happen at configure time,
include the if statements seen above.
Generator expressions were added at runtime.
They are evaluated in target properties:

- If you want to put a compile flag only for the DEBUG configuration
- Limiting an item to a certain language only, such as CXX
- Accessing configuration dependent properties, like target file location
- Giving a different location for build and install directories

```bash
target_include_directories(MyTarget PUBLIC
  $<BUILD_INTERFACE:"${CMAKE_CURRENT_SOURCE_DIR}/include">
  $<INSTALL_INTERFACE:include>
)
```

## Submodule and Dependencies

```bash
find_package(Git QUIET)

if(GIT_FOUND AND EXISTS "${PROJECT_SOURCE_DIR}/.git")
  execute_process(COMMAND
    ${GIT_EXECUTABLE} submodule update --init --recursive
    WORKING_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} RESULT_VARIABLE GIT_SUBMOD_RESULT
  )

  if(NOT GIT_SUBMOD_RESULT EQUAL "0")
    message(FATAL_ERROR "git submodule update --init failed with ${GIT_SUBMOD_RESULT}")
  endif()
endif()
```

## CMake Patterns

### Modern CMake

Modern CMake is all about targets and properties.

Constructors of Targets:

- add_executable()
- add_library()

Member variables of Targets:

- Target properties

Member functions:

- get_target_property()
- set_target_properties()
- get_property(TARGET)
- set_property(TARGET)
- target_compile_definitions()
- target_compile_features()
- target_compile_options()
- target_include_directories()
- target_link_libraries()
- target_sources()

#### Interface vs Private

interface properties model usage requirements,
whereas private properties model build requirements of targets.

### Nice Patterns

- Think in targets (Object-Oriented)
- Export your interface: You should be able to run from build or install
- Write a Config.cmake file: This is what a library author should do to support clients
- Make ALIAS targets to keep usage consistent
- Combine common functionality into clearly documented functions
- Use lowercase function names
- Upper case is for variables
- Use cmake_policy and/or range of versions

### Anti Patterns

- Do not use global functions: e.g `link_directories`, `include_libraries`
- Don't add unneeded PUBLIC requirements e.g `-Wall`
- Don't GLOB files
- Link to built files directly: Always link to targets if available
- Never skip PUBLIC/PRIVATE when linking

## Reference

- [Offical Reference](https://cmake.org/cmake/help/latest)
- [Cmake Practice](http://file.ncnynl.com/ros/CMake%20Practice.pdf)
- [CGold CMake](https://cgold.readthedocs.io/en/latest)
- [Modern CMake](https://cliutils.gitlab.io/modern-cmake)
