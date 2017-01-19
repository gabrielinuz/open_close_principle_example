/**
* Copyright (c) 2016 Gabriel Ferreira <gabrielinuz@gmail.com>. All rights reserved. 
* This file is part of COMPSET.
* Released under the GPL3 license
* https://opensource.org/licenses/GPL-3.0
**/

#ifndef REQUESTHANDLER_INTERFACE_H
#define REQUESTHANDLER_INTERFACE_H

#include <unordered_map>
#include <string>
#include <iostream>

typedef std::unordered_map<std::string, std::string> DatumType;

class RequestHandlerInterface
{
    public:
        virtual ~RequestHandlerInterface() {}
    	virtual DatumType getRequestParameters() = 0;
};

#endif // REQUESTHANDLER_INTERFACE_H